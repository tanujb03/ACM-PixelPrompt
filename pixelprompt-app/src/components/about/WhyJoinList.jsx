import { about } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

// One meaningful icon per Why-Join bullet, in the doc's own order:
// workshops, hackathons, networking, research, library, mentorship, career, community.
const icons = [
  <svg key="workshop" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" /></svg>,
  <svg key="hackathon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4a1 1 0 0 0-1 1c0 2.5 1.5 4 4 4M17 6h3a1 1 0 0 1 1 1c0 2.5-1.5 4-4 4" /></svg>,
  <svg key="network" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-pink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="8" r="3" /><circle cx="18" cy="8" r="3" /><path d="M2.5 20c0-2.8 1.6-5 3.5-5s3.5 2.2 3.5 5M14.5 20c0-2.8 1.6-5 3.5-5s3.5 2.2 3.5 5" /></svg>,
  <svg key="research" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v5.5L5.5 17a1.5 1.5 0 0 0 1.3 2.2h10.4a1.5 1.5 0 0 0 1.3-2.2L14 8.5V3" /><path d="M7.5 14h9" /></svg>,
  <svg key="library" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" /><path d="M4 19h12M16 19l3.3-14.4a1 1 0 0 1 1.2-.75l.5.13a1 1 0 0 1 .74 1.2L18.6 19" /></svg>,
  <svg key="mentorship" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m14.5 9.5-5 2.5 5 2.5 2.5-5-2.5 0Z" /></svg>,
  <svg key="career" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></svg>,
  <svg key="community" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-pink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-7-4.2-7-9.8a4.2 4.2 0 0 1 7-3.2 4.2 4.2 0 0 1 7 3.2c0 5.6-7 9.8-7 9.8Z" /></svg>,
];

export default function WhyJoinList() {
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text={about.whyJoinHeading}
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.06}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {about.whyJoin.map((item, i) => (
            <div
              key={item.id}
              className="glow-card group flex items-center gap-4 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-2)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {icons[i % icons.length]}
              </span>
              <p className="text-sm leading-relaxed text-[var(--color-text)]">
                {item.text}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mt-12 text-center font-display text-lg font-semibold text-[var(--color-text)]">
          {about.whyJoinClosingLine}
        </p>
      </div>
    </section>
  );
}
