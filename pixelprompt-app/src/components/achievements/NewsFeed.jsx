import { achievements } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function NewsFeed() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SplitTextReveal
          text={achievements.newsFeedHeading}
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-12 flex flex-col gap-5"
        >
          {achievements.newsFeed.map((item) => (
            <div
              key={item.id}
              className="glow-card group flex flex-col gap-2 p-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <p className="shrink-0 text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase sm:w-32">
                {item.dateLabel}
              </p>
              <h3 className="font-display text-base font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-lime)]">
                {item.title}
              </h3>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
