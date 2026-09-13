import { events } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function PastEventGallery() {
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SplitTextReveal
          text="Past Events"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {events.past.map((evt) => (
            <div
              key={evt.id}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={evt.image}
                alt={evt.name}
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-sm font-semibold text-white">{evt.name}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
