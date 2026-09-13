import { events } from "../../data/mockData";
import Reveal from "../shared/Reveal";

export default function PastEventGallery() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Past Events
        </h2>

        <Reveal
          as="div"
          stagger={0.06}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {events.past.map((event) => (
            <figure key={event.id} className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <img
                src={event.image}
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
                alt={event.name}
              />
              <figcaption className="bg-[var(--color-surface)] p-3 text-center text-xs font-medium text-[var(--color-text-muted)]">
                {event.name}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
