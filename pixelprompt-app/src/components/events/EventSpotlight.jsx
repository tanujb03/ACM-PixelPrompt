import { events } from "../../data/mockData";
import Reveal from "../shared/Reveal";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventSpotlight() {
  const { flagship } = events;

  return (
    <Reveal as="section" className="px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm p-6 sm:p-10 md:flex-row">
        <div className="relative w-full overflow-hidden rounded-2xl md:w-1/2">
          <img
            src={flagship.image}
            width={1200}
            height={675}
            className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
            alt={flagship.name}
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 to-transparent" />
        </div>
        <div className="w-full md:w-1/2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime)] animate-pulse-glow" />
            Flagship Event
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {flagship.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
            {flagship.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {flagship.description}
          </p>
          <div className="mt-5 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="12" height="11" rx="2" />
                <path d="M5 1v3M11 1v3M2 7h12" />
              </svg>
              {formatDate(flagship.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 1C5.24 1 3 3.24 3 6c0 4.5 5 9 5 9s5-4.5 5-9c0-2.76-2.24-5-5-5z" />
                <circle cx="8" cy="6" r="1.5" />
              </svg>
              {flagship.location}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
