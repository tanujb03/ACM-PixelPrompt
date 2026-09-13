import { about } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function FacultyAndMentors() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text="Faculty Advisor"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal as="div" className="mx-auto mt-10 max-w-sm">
          <PersonCard person={about.facultyAdvisor} />
        </Reveal>

        <SplitTextReveal
          text="What Our Alumni Say"
          as="h2"
          className="mt-20 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.12}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {about.mentorQuotes.map((mentor) => (
            <PersonCard key={mentor.id} person={mentor} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
