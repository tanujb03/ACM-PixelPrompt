import { about } from "../data/mockData";
import Reveal from "../components/shared/Reveal";
import SplitTextReveal from "../components/shared/SplitTextReveal";
import FloatingShape from "../components/shared/FloatingShape";
import WaveDivider from "../components/shared/WaveDivider";
import Timeline from "../components/about/Timeline";
import VerticalsGrid from "../components/about/VerticalsGrid";
import FacultyAndMentors from "../components/about/FacultyAndMentors";
import WhyJoinList from "../components/about/WhyJoinList";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background shapes */}
      <FloatingShape
        shape="circle"
        color="var(--color-accent)"
        size={320}
        className="-top-20 -left-20 opacity-20 blur-[90px]"
        rotateSpeed="16s"
      />
      <FloatingShape
        shape="pill"
        color="var(--color-lime)"
        size={384}
        className="top-1/4 -right-32 opacity-15 blur-[110px]"
        rotateSpeed="20s"
      />

      {/* Hero Header */}
      <section className="relative z-10 px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          Who We Are
        </div>

        <div className="mt-6 flex justify-center">
          <SplitTextReveal
            text={about.pageHeading}
            as="h1"
            className="mx-auto max-w-4xl font-display text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-6xl md:text-7xl"
          />
        </div>

        <Reveal
          as="div"
          stagger={0.15}
          className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
        >
          {about.missionBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      <WaveDivider fillBottom="rgba(211,197,246,0.03)" />
      <Timeline />

      <WaveDivider fillBottom="rgba(180,240,66,0.03)" />
      <VerticalsGrid />

      <WaveDivider fillBottom="rgba(211,197,246,0.03)" />
      <FacultyAndMentors />

      <WaveDivider fillBottom="rgba(247,37,133,0.03)" />
      <WhyJoinList />
    </div>
  );
}

