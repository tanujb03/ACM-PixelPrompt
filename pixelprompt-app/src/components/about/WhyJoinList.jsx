import { about } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

const icons = [
  <svg key="i" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" fill="var(--color-lime)" /></svg>,
  <svg key="ii" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="4" fill="var(--color-accent)" /></svg>,
  <svg key="iii" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="var(--color-pink)" /></svg>,
  <svg key="iv" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L18 18H2L10 2Z" fill="var(--color-blue)" /></svg>,
  <svg key="v" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" fill="var(--color-orange)" /></svg>,
  <svg key="vi" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="4" fill="var(--color-lime)" /></svg>,
  <svg key="vii" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="var(--color-accent)" /></svg>,
  <svg key="viii" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L18 18H2L10 2Z" fill="var(--color-pink)" /></svg>,
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
