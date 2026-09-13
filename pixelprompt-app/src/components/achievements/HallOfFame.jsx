import { achievements } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function HallOfFame() {
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SplitTextReveal
          text={achievements.hallOfFameHeading}
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--color-text-muted)]">
          {achievements.hallOfFameSubheading}
        </p>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {achievements.hallOfFame.map((person) => (
            <div key={person.id} className="glow-card group flex flex-col items-center gap-4 p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-surface-2)] font-display text-lg font-bold text-[var(--color-lime)] transition-transform duration-500 group-hover:scale-110">
                {initials(person.name)}
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[var(--color-text)]">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[var(--color-accent)]">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
