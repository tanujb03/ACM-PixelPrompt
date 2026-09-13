import { about } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function FacultyAndMentors() {
  const advisor = about.facultyAdvisor;

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text={about.facultyAdvisorHeading}
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal as="div" className="mt-10">
          <div className="glow-card flex flex-col items-center gap-8 overflow-hidden p-8 sm:flex-row sm:p-10">
            <img
              src={advisor.photo}
              alt={advisor.name}
              width={140}
              height={140}
              className="h-32 w-32 shrink-0 rounded-2xl object-cover ring-2 ring-[var(--color-lime)]/30 sm:h-36 sm:w-36"
              loading="lazy"
            />
            <div className="text-center sm:text-left">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="var(--color-lime)" className="mx-auto mb-3 opacity-60 sm:mx-0">
                <path d="M0 24V14.4C0 6.4 4.8 1.2 12 0l1.2 3.6C8.4 5.2 6 8.4 6 12h6v12H0Zm18 0V14.4c0-8 4.8-13.2 12-14.4l1.2 3.6c-4.8 1.6-7.2 4.8-7.2 8.4h6v12H18Z" />
              </svg>
              <p className="font-display text-lg leading-snug text-[var(--color-text)] sm:text-xl">
                {advisor.quote}
              </p>
              <div className="mt-5">
                <p className="font-semibold text-[var(--color-text)]">{advisor.name}</p>
                <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{advisor.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
