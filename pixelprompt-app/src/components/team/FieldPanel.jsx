import { forwardRef, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import PlayerCard from "./PlayerCard";
import PlayerLightbox from "./PlayerLightbox";
import VerticalLabel from "./VerticalLabel";
import fieldImage from "../../assets/images/team/field.png";

const coreImageModules = import.meta.glob("../../assets/images/team/core/*", { eager: true, import: "default" });
const seniorImageModules = import.meta.glob("../../assets/images/team/senior/*", { eager: true, import: "default" });

function resolvePhoto(field, filename) {
  const modules = field === "core" ? coreImageModules : seniorImageModules;
  const entry = Object.entries(modules).find(([path]) => path.endsWith(`/${filename}`));
  return entry?.[1];
}

// Groups the flat, formation-ordered roster array into rows sized by
// `formation` (e.g. [1, 2, 3]) — array order must already match row order.
function groupByFormation(members, formation) {
  const rows = [];
  let cursor = 0;
  for (const rowSize of formation) {
    rows.push(members.slice(cursor, cursor + rowSize));
    cursor += rowSize;
  }
  return rows;
}

// Measured directly off field.png's actual pixels (1672x941): the grass
// trapezoid's own playing-surface edge (excluding the thin goal-frame nub
// poking above it) runs from ~8% down the image (66% of the image's width
// there) to ~92% down (effectively full width there), narrowing linearly
// as you go up. Used to cap each row's width so cards can spread out to
// fill the pitch without ever crossing its boundary lines.
const PITCH_TOP_PCT = 8;
const PITCH_BOTTOM_PCT = 92;
const PITCH_TOP_WIDTH_PCT = 66;
const PITCH_BOTTOM_WIDTH_PCT = 100;

function pitchWidthPctAt(yPct) {
  const t = Math.min(1, Math.max(0, (yPct - PITCH_TOP_PCT) / (PITCH_BOTTOM_PCT - PITCH_TOP_PCT)));
  return PITCH_TOP_WIDTH_PCT + t * (PITCH_BOTTOM_WIDTH_PCT - PITCH_TOP_WIDTH_PCT);
}

// Fixed pixel clearance reserved above/below the row band so cards never
// sit under the site's fixed nav / bottom pill-bar regardless of viewport
// height (a percentage margin shrinks on short viewports exactly where
// the fixed-height bars need the most room).
const TOP_SAFE_PX = 100;
const BOTTOM_SAFE_PX = 130;
// Clears the overlaid vertical label on the left.
const LABEL_CLEARANCE_PX = 100;
// Extra inset so a card's glow/shadow doesn't visually bleed past the
// pitch's boundary line even when the card itself is safely inside it.
const EDGE_BUFFER_PX = 30;

// One full-screen panel inside TeamFieldSequence's pinned scroll sequence.
// The field graphic is full-bleed (its 1672:941 ratio is essentially 16:9,
// so it fills a laptop viewport edge to edge). Doesn't watch its own
// scroll position — the parent decides when this panel becomes active and
// calls `playEntrance()` (exposed via ref) then, since panels here are
// slid by a master timeline rather than scrolling into view on their own.
const FieldPanel = forwardRef(function FieldPanel(
  { label, caption, members, formation, theme = "gold", cardSize = 120, rowGap = 40, spreadFactor = 0.85, topSafePx = TOP_SAFE_PX, bottomSafePx = BOTTOM_SAFE_PX, nameFontSize = "10px", roleFontSize = "8px" },
  ref
) {
  const rows = useMemo(() => groupByFormation(members, formation), [members, formation]);
  const rowRefs = useRef([]);
  rowRefs.current = [];
  const hasPlayedRef = useRef(false);
  const initializedRef = useRef(false);
  const [selected, setSelected] = useState(null);
  const fieldRef = useRef(null);
  const [rowLayout, setRowLayout] = useState([]);

  useImperativeHandle(ref, () => ({
    playEntrance() {
      if (hasPlayedRef.current) return;
      hasPlayedRef.current = true;
      const tl = gsap.timeline();
      rowRefs.current.forEach((rowEl, i) => {
        if (!rowEl) return;
        tl.fromTo(
          rowEl.children,
          { opacity: 0, scale: 1.7 },
          { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.6)" },
          i === 0 ? 0 : "+=0.1"
        ).set(rowEl.children, { clearProps: "transform" });
      });
    },
  }));

  // Cards start hidden (oversized + invisible, the exact "from" state
  // playEntrance animates out of) the instant they mount, so the field
  // reads as genuinely blank grass until the reveal actually plays — not
  // just visually covered up. Set directly on the cards (not the row
  // wrapper) since playEntrance only ever animates the cards themselves;
  // hiding the wrapper instead would leave it invisible forever, as
  // nothing would ever reset the wrapper's own opacity back up.
  useLayoutEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    const allCards = rowRefs.current.flatMap((el) => (el ? Array.from(el.children) : []));
    gsap.set(allCards, { opacity: 0, scale: 1.7 });
  }, [rows]);

  // Both the vertical gap between rows and each row's width/left-offset
  // are computed from real measurements, not assumptions:
  //  - Row heights are measured directly, then stacked from TOP_SAFE_PX
  //    using `rowGap` as a *maximum* — if the rows plus that gap would run
  //    past the bottom safe line, the gap shrinks (down to a small floor)
  //    so the stack always fits, rather than trusting flexbox's
  //    `justify-content` to keep it in bounds (space-between hugs the
  //    edges, flex-start can overflow past them if the content's simply
  //    too tall).
  //  - Each row's safe width/left-offset is then capped to the pitch's
  //    real boundary at that row's actual computed Y, not an approximated
  //    one (an earlier version guessed Y from row index and quietly
  //    drifted from where rows really landed, most visibly for the
  //    last/widest row, letting it spill past the pitch edge).
  // `spreadFactor` pulls the safe width in further so cards don't
  // stretch edge-to-edge of the safe zone by default.
  useLayoutEffect(() => {
    const el = fieldRef.current;
    if (!el) return;

    const compute = () => {
      const fieldRect = el.getBoundingClientRect();
      const W = fieldRect.width;
      const H = fieldRect.height;
      if (!W || !H) return;
      const n = rows.length;

      const heights = rowRefs.current.map((rowEl) => rowEl?.getBoundingClientRect().height || 0);
      const usableH = H - topSafePx - bottomSafePx;
      const totalRowsH = heights.reduce((sum, h) => sum + h, 0);
      // Gap is capped at rowGap and floored at 0 — rows may sit tightly
      // packed but must never overlap each other.
      const gap = n > 1 ? Math.min(rowGap, Math.max(0, (usableH - totalRowsH) / (n - 1))) : 0;

      let cursor = topSafePx;
      const layout = heights.map((h) => {
        const topPx = cursor;
        cursor += h + gap;

        const centerY = topPx + h / 2;
        const yPct = (centerY / H) * 100;
        const safeWidthPct = pitchWidthPctAt(yPct);
        const rawLeftPx = ((100 - safeWidthPct) / 200) * W;
        const rawRightPx = W - rawLeftPx;
        const safeLeftPx = Math.max(rawLeftPx, LABEL_CLEARANCE_PX) + EDGE_BUFFER_PX;
        const safeRightPx = rawRightPx - EDGE_BUFFER_PX;
        const safeWidthPx = Math.max(0, safeRightPx - safeLeftPx);
        const targetWidthPx = safeWidthPx * spreadFactor;
        const centerXPx = (safeLeftPx + safeRightPx) / 2;
        return { top: topPx, left: centerXPx - targetWidthPx / 2, width: targetWidthPx };
      });

      setRowLayout(layout);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    rowRefs.current.forEach((rowEl) => rowEl && ro.observe(rowEl));
    return () => ro.disconnect();
  }, [rows, rowGap, spreadFactor, topSafePx, bottomSafePx]);

  return (
    <div ref={fieldRef} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${fieldImage})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
      />

      <VerticalLabel text={label} overlay />

      {caption && (
        <p className="absolute top-20 left-1/2 max-w-md -translate-x-1/2 px-4 text-center text-xs text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.7)] sm:top-24 sm:text-sm">
          {caption}
        </p>
      )}

      {rows.map((row, i) => {
        const bounds = rowLayout[i];
        return (
          <div
            key={i}
            ref={(el) => (rowRefs.current[i] = el)}
            className="absolute flex"
            style={{
              top: bounds ? bounds.top : TOP_SAFE_PX,
              left: bounds ? bounds.left : 0,
              width: bounds ? bounds.width : "100%",
              justifyContent: row.length === 1 ? "center" : "space-between",
              alignItems: "flex-start",
              visibility: bounds ? "visible" : "hidden",
            }}
          >
            {row.map((member) => (
              <PlayerCard
                key={member.id}
                member={member}
                photoSrc={resolvePhoto(member.field, member.photo)}
                theme={theme}
                size={cardSize}
                nameFontSize={nameFontSize}
                roleFontSize={roleFontSize}
                onSelect={setSelected}
              />
            ))}
          </div>
        );
      })}

      {selected && (
        <PlayerLightbox
          member={selected}
          photoSrc={resolvePhoto(selected.field, selected.photo)}
          theme={theme}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
});

export default FieldPanel;
