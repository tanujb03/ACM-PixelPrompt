import { achievements } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function NewsFeed() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text="News & Milestones"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-12 flex flex-col gap-6"
        >
          {achievements.newsFeed.map((item) => (
            <div
              key={item.id}
              className="glow-card group flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="relative w-full overflow-hidden rounded-xl sm:w-40 sm:shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-square"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-widest text-[var(--color-accent)] uppercase">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-lime)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
