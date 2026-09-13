import { Link } from "react-router-dom";
import SplitTextReveal from "../shared/SplitTextReveal";
import Reveal from "../shared/Reveal";

export default function AboutTeaser() {
  return (
    <section className="section-lavender relative overflow-hidden px-6 py-24 sm:py-36">
      {/* Large heading */}
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-6 inline-block text-xs font-bold tracking-[0.25em] uppercase opacity-50">
          ABOUT US
        </span>

        <SplitTextReveal
          text="What Are We Building For You?"
          as="h2"
          className="font-hero text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <Reveal as="div" className="mt-8">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-lavender sm:text-lg" style={{ color: "rgba(26,17,69,0.6)" }}>
            ACM Nova Chapter is a community of builders, researchers, and problem-solvers.
            We run workshops, hackathons, and research circles for students who want to go
            further than the syllabus. Four active SIGs. 450+ members. 120+ events hosted.
          </p>
        </Reveal>

        <Reveal as="div" className="mt-10">
          <Link
            to="/about"
            viewTransition
            className="inline-flex items-center gap-2 rounded-full bg-[#1a1145] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            Learn more about us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
