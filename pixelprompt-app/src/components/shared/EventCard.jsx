const typeColors = {
  workshop: "var(--color-lime)",
  hackathon: "var(--color-accent)",
  talk: "var(--color-pink)",
};

export default function EventCard({ event }) {
  return (
    <div className="glow-card group flex flex-col gap-4 p-6">
      <span
        className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase"
        style={{
          background: `color-mix(in srgb, ${typeColors[event.type] || "var(--color-accent)"} 15%, transparent)`,
          color: typeColors[event.type] || "var(--color-accent)",
          border: `1px solid color-mix(in srgb, ${typeColors[event.type] || "var(--color-accent)"} 30%, transparent)`,
        }}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: typeColors[event.type] || "var(--color-accent)" }}
        />
        {event.type}
      </span>

      <h3 className="font-display text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-lime)]">
        {event.name}
      </h3>

      <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
        {event.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-muted)]">
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="12" height="11" rx="2" />
            <path d="M5 1v3M11 1v3M2 7h12" />
          </svg>
          {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 4v4l3 2" />
          </svg>
          {event.time}
        </span>
        {event.location && (
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 1C5.24 1 3 3.24 3 6c0 4.5 5 9 5 9s5-4.5 5-9c0-2.76-2.24-5-5-5z" />
              <circle cx="8" cy="6" r="1.5" />
            </svg>
            {event.location}
          </span>
        )}
      </div>
    </div>
  );
}
