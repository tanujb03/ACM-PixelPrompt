import { about } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function FacultyAndMentors() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text={about.facultyAdvisorHeading}
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal as="div" className="mx-auto mt-10 max-w-sm">
          <PersonCard person={about.facultyAdvisor} />
        </Reveal>
      </div>
    </section>
  );
}
