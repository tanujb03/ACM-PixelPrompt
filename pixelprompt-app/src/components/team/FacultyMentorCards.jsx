import { team } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";

export default function FacultyMentorCards() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Faculty Mentors
        </h2>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {team.facultyMentors.map((mentor) => (
            <PersonCard key={mentor.id} photo={mentor.photo} name={mentor.name} role={mentor.role}>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {mentor.bio}
              </p>
            </PersonCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
