import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import FloatingShape from "../shared/FloatingShape";
import MagneticButton from "../shared/MagneticButton";
import { hero } from "../../data/mockData";

// A small network graph — nodes connected by edges, echoing "computing
// minds come together" instead of a decorative squiggle with no meaning.
// Coordinates live in a 0–560 x 0–560 box so it stays fully contained
// within its wrapper at any viewport width.
const NETWORK_NODES = [
  { id: "n1", x: 60, y: 90 },
  { id: "n2", x: 220, y: 40 },
  { id: "n3", x: 380, y: 100 },
  { id: "n4", x: 500, y: 60 },
  { id: "n5", x: 140, y: 220 },
  { id: "n6", x: 320, y: 260 },
  { id: "n7", x: 400, y: 230 }, // Moved from 470 to 400
  { id: "n8", x: 40, y: 360 },
  { id: "n9", x: 240, y: 400 },
  { id: "n10", x: 420, y: 400 },
];
const NETWORK_EDGES = [
  ["n1", "n2"], ["n2", "n3"], ["n3", "n4"], ["n2", "n5"], ["n5", "n6"],
  ["n6", "n3"], ["n6", "n7"], ["n3", "n7"], ["n5", "n8"], ["n5", "n9"],
  ["n9", "n6"], ["n6", "n10"], ["n7", "n10"], ["n9", "n10"],
];
const nodeById = Object.fromEntries(NETWORK_NODES.map((n) => [n.id, n]));

export default function Hero() {
  const ref = useRef(null);
  const networkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Stagger in each line of giant text
      tl.from(".hero-line", {
        opacity: 0,
        y: 120,
        rotateX: 25,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      })
        .from(
          ".hero-float",
          {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      // Network edges draw in, nodes pop in after
      if (networkRef.current) {
        const edges = networkRef.current.querySelectorAll(".network-edge");
        const nodes = networkRef.current.querySelectorAll(".network-node");
        edges.forEach((edge) => {
          const length = edge.getTotalLength();
          gsap.set(edge, { strokeDasharray: length, strokeDashoffset: length });
        });
        gsap.to(edges, {
          strokeDashoffset: 0,
          duration: 1.4,
          stagger: 0.05,
          delay: 0.6,
          ease: "power2.inOut",
        });
        gsap.from(nodes, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          delay: 0.5,
          ease: "back.out(2)",
          transformOrigin: "center",
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden px-4 pt-24 pb-16 sm:px-8 sm:pt-28 md:pt-32"
    >
      {/* Background radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_rgba(124,92,255,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,_rgba(200,230,46,0.04),_transparent_50%)]" />
      </div>

      {/* Network graph & Shapes — combined to form the cube and connections */}
      <div
        ref={networkRef}
        className="pointer-events-none absolute right-[-2rem] top-1/2 z-[2] hidden h-[600px] w-[600px] -translate-y-1/2 lg:block"
      >
        {/* The network lines connecting everything */}
        <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full opacity-60">
          {NETWORK_EDGES.map(([a, b]) => {
            const from = nodeById[a];
            const to = nodeById[b];
            return (
              <line
                key={`${a}-${b}`}
                className="network-edge"
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--color-lime)"
                strokeWidth="1.5"
              />
            );
          })}
          {/* Small default dots for remaining nodes */}
          {NETWORK_NODES.map((n) => (
            <circle
              key={n.id}
              className="network-node"
              cx={n.x}
              cy={n.y}
              r="4"
              fill="var(--color-bg)"
              stroke="var(--color-lime)"
              strokeWidth="1.5"
            />
          ))}
        </svg>

        {/* The shapes, acting as big nodes in the cube layout */}
        <div className="hero-float" style={{ position: "absolute", left: 60, top: 90, transform: "translate(-50%, -50%)" }}>
          <FloatingShape shape="star" color="#f72585" width={110} height={110} num="45+" label="events hosted" rotateSpeed="25s" />
        </div>
        <div className="hero-float" style={{ position: "absolute", left: 380, top: 100, transform: "translate(-50%, -50%)" }}>
          <FloatingShape shape="decagon" color="#ea3323" width={110} height={110} label="3 hackathon wins" rotateSpeed="18s" reverse />
        </div>
        <div className="hero-float" style={{ position: "absolute", left: 400, top: 230, transform: "translate(-50%, -50%)" }}>
          <FloatingShape shape="pill" color="#c8e62e" textColor="#150734" width={140} height={60} label="4 active SIGs" rotateSpeed="0s" floatDelay={0.5} />
        </div>
        <div className="hero-float" style={{ position: "absolute", left: 140, top: 220, transform: "translate(-50%, -50%)" }}>
          <FloatingShape shape="star" color="#f5f5f0" textColor="#150734" width={100} height={100} num="500+" label="students engaged" rotateSpeed="30s" reverse floatDelay={1.2} />
        </div>
        <div className="hero-float" style={{ position: "absolute", left: 240, top: 400, transform: "translate(-50%, -50%)" }}>
          <FloatingShape shape="circle" color="#7209b7" width={100} height={100} num="6 years" label="of building" rotateSpeed="0s" floatDelay={0.8} />
        </div>
        <div className="hero-float" style={{ position: "absolute", left: 420, top: 400, transform: "translate(-50%, -50%)" }}>
          <FloatingShape shape="pill" color="#4361ee" width={140} height={60} label="Since 2019" rotateSpeed="0s" floatDelay={1} />
        </div>
      </div>

      {/* GIANT UPPERCASE TEXT — Crency style */}
      <div className="relative z-[4] flex min-h-[70vh] flex-col justify-center">
        <span className="hero-line mb-4 block text-xs font-bold tracking-[0.25em] text-[var(--color-lime)] uppercase sm:text-sm">
          {hero.eyebrow}
        </span>
        <h1 className="hero-giant select-none" aria-label={hero.headline}>
          <span className="hero-line block text-[9vw] leading-[0.95] sm:text-[8vw] md:text-[8vw] lg:text-[7.5vw]">
            Where Computing
          </span>
          <span className="hero-line block text-[9vw] leading-[0.95] sm:text-[8vw] md:text-[8vw] lg:text-[7.5vw]">
            Minds Come Together.
          </span>
        </h1>

        <p className="hero-line mt-8 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          {hero.subhead}
        </p>

        <div className="hero-line mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton
            to={hero.primaryCta.to}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-lime)] px-7 py-3.5 text-sm font-bold text-[#150734]"
          >
            {hero.primaryCta.label}
          </MagneticButton>
          <MagneticButton
            to={hero.secondaryCta.to}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
          >
            {hero.secondaryCta.label}
          </MagneticButton>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
