import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
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

// One full-screen panel inside TeamFieldSequence's pinned scroll sequence.
// The field graphic is full-bleed (its 1672:941 ratio is essentially 16:9,
// so it fills a laptop viewport edge to edge) — only the card rows keep
// clearance from the site's fixed nav/bottom-bar, the grass runs underneath.
// Doesn't watch its own scroll position — the parent decides when this
// panel becomes active and calls `playEntrance()` (exposed via ref) then,
// since panels here are slid by a master timeline rather than scrolling
// into view on their own.
const FieldPanel = forwardRef(function FieldPanel(
  { label, caption, members, formation, theme = "gold", cardSize = 120 },
  ref
) {
  const rows = useMemo(() => groupByFormation(members, formation), [members, formation]);
  const rowRefs = useRef([]);
  rowRefs.current = [];
  const hasPlayedRef = useRef(false);
  const [selected, setSelected] = useState(null);

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

  // Fixed pixel clearance (not percentages) reserved above/below the row
  // stack so cards never sit under the site's fixed nav / bottom pill-bar
  // regardless of viewport height. Rows are laid out with
  // justify-content: space-between inside that reserved band, so the first
  // and last rows' own edges land exactly at the band's edges no matter how
  // tall a row's cards actually render — no need to guess card height.
  const TOP_SAFE_PX = 100;
  const BOTTOM_SAFE_PX = 130;

  return (
    <div className="relative h-full w-full overflow-hidden">
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

      <div
        className="absolute left-0 right-0 flex flex-col px-20 sm:px-28"
        style={{
          top: TOP_SAFE_PX,
          bottom: BOTTOM_SAFE_PX,
          justifyContent: rows.length === 1 ? "center" : "space-between",
        }}
      >
        {rows.map((row, i) => (
          <div key={i} ref={(el) => (rowRefs.current[i] = el)} className="flex justify-center gap-6 sm:gap-14">
            {row.map((member) => (
              <PlayerCard
                key={member.id}
                member={member}
                photoSrc={resolvePhoto(member.field, member.photo)}
                theme={theme}
                size={cardSize}
                onSelect={setSelected}
              />
            ))}
          </div>
        ))}
      </div>

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
