import { team } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function FacultyMentorCards() {
  return (
    <section className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text="Faculty Mentors"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.12}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {team.facultyMentors.map((mentor) => (
            <PersonCard key={mentor.id} person={mentor} showBio />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
