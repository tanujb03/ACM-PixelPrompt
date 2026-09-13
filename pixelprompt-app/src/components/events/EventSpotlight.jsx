import { flagshipEvent } from "../../data/mockData";
import Reveal from "../shared/Reveal";

export default function EventSpotlight() {
  return (
    <Reveal as="section" className="px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm p-6 sm:p-10">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime)] animate-pulse-glow" />
            Flagship Event {flagshipEvent.isIllustrative && "· illustrative format"}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {flagshipEvent.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            {flagshipEvent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {flagshipEvent.formats.map((format) => (
            <div key={format.id} className="glow-card p-5">
              <h3 className="font-display text-base font-semibold text-[var(--color-lime)]">
                {format.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
