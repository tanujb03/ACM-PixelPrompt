import { achievements } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function HallOfFame() {
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SplitTextReveal
          text="Hall of Fame"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.hallOfFame.map((person) => (
            <div key={person.id} className="glow-card group flex flex-col items-center gap-4 p-6 text-center">
              <div className="relative overflow-hidden rounded-full">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-20 w-20 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[var(--color-text)]">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[var(--color-accent)]">
                  {person.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {person.contribution}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
