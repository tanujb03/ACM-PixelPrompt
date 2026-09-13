import { Link } from "react-router-dom";
import { events } from "../../data/mockData";
import EventCard from "../shared/EventCard";
import Reveal from "../shared/Reveal";

export default function EventsTeaser() {
  const preview = events.upcoming.slice(0, 3);

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Upcoming Events
          </h2>
          <p className="max-w-xl text-sm text-[var(--color-text-muted)]">
            Workshops, hackathons, and talks — there's always something on the calendar.
          </p>
        </div>

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {preview.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Link
            to="/events"
            viewTransition
            className="text-sm font-semibold text-[var(--color-accent)] transition hover:opacity-80"
          >
            See all events →
          </Link>
        </div>
      </div>
    </section>
  );
}
