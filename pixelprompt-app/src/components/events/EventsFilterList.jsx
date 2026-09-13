import { useState } from "react";
import { events } from "../../data/mockData";
import EventCard from "../shared/EventCard";

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
      : events.upcoming.filter((event) => event.type === activeFilter);

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Upcoming Events
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeFilter === filter.id
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-sm text-[var(--color-text-muted)]">
              No events in this category right now — check back soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
