import { about } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";

export default function FacultyAndMentors() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Faculty Advisor
        </h2>

        <Reveal as="div" className="mx-auto mt-8 max-w-sm">
          <PersonCard photo={about.facultyAdvisor.photo} name={about.facultyAdvisor.name} role={about.facultyAdvisor.role}>
            <p className="mt-2 text-sm text-[var(--color-text-muted)] italic">
              “{about.facultyAdvisor.quote}”
            </p>
          </PersonCard>
        </Reveal>

        <h2 className="mt-16 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          What Our Alumni Say
        </h2>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {about.mentorQuotes.map((mentor) => (
            <PersonCard key={mentor.id} photo={mentor.photo} name={mentor.name} role={mentor.role}>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] italic">
                “{mentor.quote}”
              </p>
            </PersonCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
