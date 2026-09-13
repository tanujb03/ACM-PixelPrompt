import { about } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
}

export default function Timeline() {
  const colors = [
    "var(--color-accent)",
    "var(--color-lime)",
    "var(--color-pink)",
    "var(--color-blue)",
    "var(--color-orange)",
  ];

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SplitTextReveal
          text="Our Journey"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.15}
          className="mt-14 flex flex-col gap-10 border-l-2 border-[var(--color-border)] pl-8"
        >
          {about.timeline.map((milestone, i) => (
            <div key={milestone.id} className="relative">
              {/* Animated dot */}
              <span
                className="absolute top-1 -left-[41px] h-4 w-4 rounded-full border-2 border-[var(--color-bg)] animate-pulse-glow"
                style={{ background: colors[i % colors.length] }}
              />
              {/* Connecting glow */}
              <span
                className="absolute top-1 -left-[41px] h-4 w-4 rounded-full opacity-30 blur-sm"
                style={{ background: colors[i % colors.length] }}
              />

              <p className="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
                {formatDate(milestone.date)}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-text)]">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {milestone.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
