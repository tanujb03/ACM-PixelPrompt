import { awards } from "../../data/mockData";

// Plain CSS marquee — the track is rendered twice back-to-back and
// scrolled -50%, so the loop reads as continuous regardless of content
// width. Swap for a library-driven marquee in the restyle pass if needed.
export default function AwardsTicker() {
  const track = (key) => (
    <div key={key} className="flex shrink-0 items-center gap-12 pr-12">
      {awards.map((award) => (
        <span
          key={`${key}-${award.id}`}
          className="text-sm whitespace-nowrap text-[var(--color-text-muted)]"
        >
          {award.text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-3">
      <div className="marquee-track flex w-max">
        {track("a")}
        {track("b")}
      </div>
    </div>
  );
}
