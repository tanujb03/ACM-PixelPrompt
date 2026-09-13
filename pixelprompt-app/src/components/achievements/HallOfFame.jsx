import { achievements } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";

export default function HallOfFame() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Hall of Fame
        </h2>

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.hallOfFame.map((person) => (
            <PersonCard key={person.id} photo={person.photo} name={person.name} role={person.role}>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {person.contribution}
              </p>
            </PersonCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
