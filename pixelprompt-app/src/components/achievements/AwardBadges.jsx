import { achievements } from "../../data/mockData";
import Reveal from "../shared/Reveal";

export default function AwardBadges() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Awards & Recognition
        </h2>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {achievements.awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-2xl">
                🏆
              </span>
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {award.issuer} · {award.year}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
