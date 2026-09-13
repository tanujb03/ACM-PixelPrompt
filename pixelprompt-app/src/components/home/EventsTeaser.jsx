import { Link } from "react-router-dom";
import { events } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

const typeColors = {
  workshop: "var(--color-lime)",
  hackathon: "var(--color-accent)",
  talk: "var(--color-pink)",
};

export default function EventsTeaser() {
  const preview = events.upcoming.slice(0, 3);

  return (
    <section className="relative border-t border-[var(--color-border)] px-6 py-20 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--color-surface)]/30" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
            What's Coming
          </span>
          <SplitTextReveal
            text="Upcoming Events"
            as="h2"
            className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
          />
          <p className="max-w-xl text-sm text-[var(--color-text-muted)]">
            Workshops, hackathons, and talks — there's always something on the
            calendar.
          </p>
        </div>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {preview.map((event) => (
            <div
              key={event.id}
              className="glow-card group flex flex-col gap-4 p-6"
            >
              {/* Type badge */}
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

              <div className="mt-auto flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="12" height="11" rx="2" />
                    <path d="M5 1v3M11 1v3M2 7h12" />
                  </svg>
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="6" />
                    <path d="M8 4v4l3 2" />
                  </svg>
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Link
            to="/events"
            viewTransition
            className="animated-underline group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:gap-3"
          >
            See all events
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
