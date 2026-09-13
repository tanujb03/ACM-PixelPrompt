import { about } from "../../data/mockData";
import Reveal from "../shared/Reveal";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Timeline() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Our Journey
        </h2>

        <Reveal
          as="div"
          stagger={0.12}
          className="mt-10 flex flex-col gap-8 border-l border-[var(--color-border)] pl-6"
        >
          {about.timeline.map((milestone) => (
            <div key={milestone.id} className="relative">
              <span className="absolute top-1.5 -left-[27px] h-3 w-3 rounded-full bg-[var(--color-accent)]" />
              <p className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
                {formatDate(milestone.date)}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{milestone.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {milestone.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
