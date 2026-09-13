import * as ReactCountUp from "react-countup";
import { events } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;

const typeColors = {
  workshop: "var(--color-lime)",
  hackathon: "var(--color-accent)",
  talk: "var(--color-pink)",
};

export default function FootfallStats() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text="Footfall by Event Type"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.12}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {events.footfall.map((item) => (
            <div
              key={item.id}
              className="glow-card group flex flex-col items-center gap-3 p-8 text-center"
            >
              <span
                className="inline-block h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-150"
                style={{ background: typeColors[item.type] || "var(--color-accent)" }}
              />
              <p className="font-display text-4xl font-bold tracking-tight">
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2.5}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="text-sm font-medium text-[var(--color-text-muted)]">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
