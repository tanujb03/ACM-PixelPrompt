import { about } from "../data/mockData";
import Reveal from "../components/shared/Reveal";
import Timeline from "../components/about/Timeline";
import VerticalsGrid from "../components/about/VerticalsGrid";
import FacultyAndMentors from "../components/about/FacultyAndMentors";
import WhyJoinList from "../components/about/WhyJoinList";

export default function About() {
  return (
    <>
      <section className="px-6 pt-24 pb-8 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {about.missionHeadline}
        </h1>
      </section>

      <Reveal
        as="div"
        stagger={0.15}
        className="mx-auto flex max-w-3xl flex-col gap-4 px-6 pb-16 text-center text-base text-[var(--color-text-muted)]"
      >
        {about.missionBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>

      <Timeline />
      <VerticalsGrid />
      <FacultyAndMentors />
      <WhyJoinList />
    </>
  );
}
