import { useState } from "react";
import { Link } from "react-router-dom";
import { events, EVENT_TYPES } from "../../data/events";

const filters = ["All", ...EVENT_TYPES];

const rowPalette = [
  { bg: "var(--color-lime)", text: "#150734", btnBg: "#150734", btnFg: "var(--color-lime)" },
  { bg: "var(--color-pink)", text: "#ffffff", btnBg: "#150734", btnFg: "var(--color-pink)" },
  { bg: "var(--color-blue)", text: "#ffffff", btnBg: "#150734", btnFg: "var(--color-blue)" },
  { bg: "var(--color-lavender)", text: "#150734", btnBg: "#150734", btnFg: "var(--color-lavender)" },
  { bg: "var(--color-orange)", text: "#150734", btnBg: "#150734", btnFg: "var(--color-orange)" },
  { bg: "var(--color-purple)", text: "#ffffff", btnBg: "#150734", btnFg: "var(--color-purple)" },
];

// Same color index every event always uses, regardless of which filter is
// active, so a row's color matches the hero color on its detail page.
const paletteByEventId = Object.fromEntries(
  events.map((e, i) => [e.id, rowPalette[i % rowPalette.length]])
);

export default function EventList() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? events : events.filter((e) => e.type === activeFilter);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-2 px-6">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === f
                ? "border-[#150734] bg-[#150734] text-[var(--color-lime)]"
                : "border-[rgba(21,7,52,0.25)] text-[rgba(21,7,52,0.6)] hover:border-[#150734] hover:text-[#150734]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col">
        {filtered.map((event) => {
          const palette = paletteByEventId[event.id];

          return (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              viewTransition
              className="group flex w-full items-center gap-4 px-6 py-6 text-left transition-[padding] duration-300 hover:py-8 sm:px-12"
              style={{ background: palette.bg, color: palette.text }}
            >
              <span className="font-display text-lg font-bold sm:text-2xl">
                {event.shortName || event.name}
              </span>
              <span
                className="ml-auto hidden shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide sm:inline-block"
                style={{ background: "rgba(0,0,0,0.12)" }}
              >
                {event.type}
              </span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
                style={{ background: palette.btnBg, color: palette.btnFg }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-6 py-16 text-center text-sm text-[rgba(21,7,52,0.6)]">
            No events in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
