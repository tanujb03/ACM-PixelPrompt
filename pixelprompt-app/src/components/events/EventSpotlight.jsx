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
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 md:flex-row">
        <img
          src={flagship.image}
          width={1200}
          height={675}
          className="aspect-video w-full rounded-2xl object-cover md:w-1/2"
          alt={flagship.name}
        />
        <div className="w-full md:w-1/2">
          <span className="text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
            Flagship Event
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {flagship.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-[var(--color-text-muted)]">
            {flagship.tagline}
          </p>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            {flagship.description}
          </p>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            {formatDate(flagship.date)} · {flagship.location}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
