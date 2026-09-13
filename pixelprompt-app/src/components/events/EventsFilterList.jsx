import { useState } from "react";
import { events } from "../../data/mockData";
import EventCard from "../shared/EventCard";
import SplitTextReveal from "../shared/SplitTextReveal";

const filters = [
  { id: "all", label: "All" },
  { id: "workshop", label: "Workshops" },
  { id: "hackathon", label: "Hackathons" },
  { id: "talk", label: "Talks" },
];

export default function EventsFilterList() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? events.upcoming
      : events.upcoming.filter((e) => e.type === activeFilter);

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SplitTextReveal
          text="Upcoming Events"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_0_16px_rgba(124,92,255,0.3)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-[var(--color-text-muted)]">
              No events in this category right now — check back soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
