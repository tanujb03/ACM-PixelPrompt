import { awards } from "../../data/mockData";

export default function AwardsTicker() {
  const track = (key) => (
    <div key={key} className="flex shrink-0 items-center gap-8 pr-8">
      {awards.map((award) => (
        <span
          key={`${key}-${award.id}`}
          className="flex items-center gap-8"
        >
          <span className="text-sm font-medium whitespace-nowrap text-[var(--color-text-lavender)]">
            {award.text}
          </span>
          {/* Glowing star separator */}
          <span className="flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z"
                fill="var(--color-lime)"
                opacity="0.6"
              />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)]/50 py-4 backdrop-blur-sm">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-surface)]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-surface)]/80 to-transparent" />

      <div className="marquee-track flex w-max">
        {track("a")}
        {track("b")}
      </div>
    </div>
  );
}
