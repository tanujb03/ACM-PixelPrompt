import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html, useProgress, Center, Bounds } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { events } from "../../data/events";
import { eventTree } from "../../data/mockData";
import SplitTextReveal from "../shared/SplitTextReveal";

const MODEL_URL = "/models/realistic-tree.glb";

const imageModules = import.meta.glob("../../assets/images/events/*", {
  eager: true,
  import: "default",
});
const imagesByFilename = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split("/").pop(), url])
);

// Deterministic per-event pseudo-random sequence, so leaf placement/rotation
// is stable across reloads instead of reshuffling every render.
function hashStringToInt(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return h;
}
function seededRandom(seed) {
  let t = seed >>> 0;
  return function next() {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// A card frame with tiny corner brackets that fade in on hover — a nod to
// nature-beyond.tech's "card__dot" targeting-reticle treatment on its own
// scroll-cards, adapted for our per-leaf hover popovers.
function CornerDots({ visible }) {
  const base = "absolute size-[4px] bg-[var(--color-lime)] transition-opacity duration-300";
  const style = { opacity: visible ? 1 : 0 };
  return (
    <>
      <span className={`${base} top-0 left-0 -translate-x-1/2 -translate-y-1/2`} style={style} />
      <span className={`${base} top-0 right-0 translate-x-1/2 -translate-y-1/2`} style={style} />
      <span className={`${base} bottom-0 left-0 -translate-x-1/2 translate-y-1/2`} style={style} />
      <span className={`${base} bottom-0 right-0 translate-x-1/2 translate-y-1/2`} style={style} />
    </>
  );
}

// A simple leaf silhouette (not a generic dot) so each event reads as a
// leaf attached to the tree rather than a floating UI marker.
function LeafIcon({ size, rotation }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)`, filter: "drop-shadow(0 0 6px rgba(200,230,46,0.75))" }}
    >
      <path
        d="M12 21c0 0-8-5.2-8-11.2C4 5.6 7.6 2 12 2s8 3.6 8 7.8C20 15.8 12 21 12 21Z"
        fill="var(--color-lime)"
        stroke="#150734"
        strokeWidth="1"
      />
      <path d="M12 19V6" stroke="#150734" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

function EventMarker({ event, position, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const imageSrc = event.image ? imagesByFilename[event.image] : null;
  const rotation = useMemo(() => {
    const rng = seededRandom(hashStringToInt(event.id) + 501);
    return Math.round(rng() * 50 - 25);
  }, [event.id]);

  return (
    // No distanceFactor: the marker stays a fixed, reliably clickable CSS
    // pixel size regardless of how far the camera sits from the model —
    // with distanceFactor set, a Bounds-fit camera distance can shrink the
    // hit target to well under a pixel.
    <Html position={position} center zIndexRange={[100, 0]} style={{ pointerEvents: "auto" }}>
      <div
        className="relative flex cursor-pointer items-center justify-center p-3"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => onNavigate(event.id)}
      >
        <div className={hovered ? "" : "animate-pulse"}>
          <LeafIcon size={hovered ? 26 : 18} rotation={rotation} />
        </div>
        {hovered && (
          <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-44 -translate-x-1/2">
            <div className="relative overflow-hidden rounded-lg border border-[var(--color-border-bright)] bg-[#0d0221]/95 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm">
              <CornerDots visible={hovered} />
              {imageSrc && (
                <img src={imageSrc} alt="" className="h-20 w-full object-cover" loading="lazy" />
              )}
              <p className="px-2.5 py-2 text-[12px] font-medium leading-snug text-[rgba(232,232,240,0.95)]">
                {event.shortName || event.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
}

function TreeModel({ onNavigate }) {
  const { scene: cachedScene } = useGLTF(MODEL_URL);
  // useGLTF caches and shares one scene graph instance across every mount.
  // Since we mutate it (stripping the ground plane below) and the tree
  // section can mount/unmount as you navigate away and back, reusing that
  // shared instance directly caused the whole model to reposition itself on
  // a second visit. Cloning gives every mount an independent object graph.
  const scene = useMemo(() => SkeletonUtils.clone(cachedScene), [cachedScene]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // This model's foliage is one dense merged mesh named "crown merged_..."
    // (vs. thin bare branches in the previous asset), so every sampled
    // vertex already sits inside real, visible leaf geometry — markers
    // read as leaves among leaves instead of floating dots. Fall back to
    // the mesh with the most vertices if the name ever changes on a
    // re-export, since the crown is by far the densest mesh in this model.
    const meshes = [];
    scene.traverse((obj) => {
      if (obj.isMesh) meshes.push(obj);
    });
    let crownMesh = meshes.find((m) => /crown|leaf|leaves|foliage/i.test(m.name));
    if (!crownMesh) {
      crownMesh = meshes.sort(
        (a, b) =>
          (b.geometry?.attributes?.position?.count || 0) -
          (a.geometry?.attributes?.position?.count || 0)
      )[0];
    }
    if (!crownMesh) return;

    crownMesh.updateWorldMatrix(true, false);

    // Pre-convert every vertex to world space up front (one matrix
    // multiply each, cheap even at 18k+ vertices) so the picks below are
    // ready to hand straight to the markers.
    const posAttr = crownMesh.geometry.attributes.position;
    const vertexCount = posAttr.count;
    const worldPositions = new Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) {
      worldPositions[i] = new THREE.Vector3(
        posAttr.getX(i),
        posAttr.getY(i),
        posAttr.getZ(i)
      ).applyMatrix4(crownMesh.matrixWorld);
    }

    // Pick straight from vertices (Fisher-Yates shuffle, deduped) rather
    // than area-weighted surface sampling, so leaf markers spread evenly
    // across the canopy instead of clustering at its largest triangles.
    const indices = Array.from({ length: vertexCount }, (_, i) => i);
    const rng = seededRandom(0xea57);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const seen = new Set();
    const picked = [];
    for (const idx of indices) {
      if (picked.length >= events.length) break;
      const p = worldPositions[idx];
      const key = `${p.x.toFixed(1)},${p.y.toFixed(1)},${p.z.toFixed(1)}`;
      if (seen.has(key)) continue; // skip near-duplicate vertices (shared seams)
      seen.add(key);
      picked.push(idx);
    }
    while (picked.length < events.length) picked.push(indices[picked.length % indices.length]);

    const computed = events.map((event, i) => ({
      event,
      position: worldPositions[picked[i]],
    }));
    setMarkers(computed);
  }, [scene]);

  // Markers render as siblings of <Center>, not children of it: <Center>
  // recenters its children by shifting an internal wrapper group, and each
  // marker's position below is already a full WORLD-space point (computed
  // via crownMesh's matrixWorld, which already includes that same shift).
  // Nesting the markers inside <Center> would apply its recentering a
  // second time — R3F treats a child's position prop as relative to its
  // own parent group, so an already-world-space value gets shifted twice,
  // scattering every marker off of the model it's meant to sit on.
  return (
    <>
      <Center>
        <primitive object={scene} />
      </Center>
      {markers.map(({ event, position }) => (
        <EventMarker key={event.id} event={event} position={position} onNavigate={onNavigate} />
      ))}
    </>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
          Loading tree{"…"} {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

export default function EventTree3D() {
  const navigate = useNavigate();
  const handleNavigate = useMemo(() => (id) => navigate(`/events/${id}`), [navigate]);
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // The model is a large download — only start fetching it once this
  // section is about to scroll into view, not on every Home page load.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg)]">
      {/* In normal document flow, above the canvas — not overlaid on top of
          it — so the heading never competes with the tree's canopy for the
          same space. The canvas below keeps its own full-screen height and
          framing untouched. */}
      <div className="mx-auto max-w-3xl px-6 pt-28 text-center sm:pt-36">
        <SplitTextReveal
          text={eventTree.heading}
          as="h2"
          className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
        />
        <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">
          {eventTree.subheading}
        </p>
      </div>

      <div ref={containerRef} className="relative h-screen min-h-[600px] w-full">
        {shouldLoad ? (
          <Canvas camera={{ position: [0, 5, 100], fov: 45 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[20, 30, 10]} intensity={1.4} />
            <hemisphereLight args={["#7c5cff", "#150734", 0.5]} />
            <Suspense fallback={<Loader />}>
              <Bounds fit clip margin={1.3}>
                <TreeModel onNavigate={handleNavigate} />
              </Bounds>
            </Suspense>
            <OrbitControls
              makeDefault
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.6}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.7}
            />
          </Canvas>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
              Tree loads as you scroll closer
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
