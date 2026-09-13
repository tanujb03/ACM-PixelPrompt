import * as ReactCountUp from "react-countup";
import Reveal from "../shared/Reveal";

const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;

export default function StatsStrip({ stats }) {
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm">
      {/* Gradient accent line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <Reveal
        as="div"
        stagger={0.1}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-5"
      >
        {stats.map((stat, i) => {
          const colors = [
            "var(--color-accent)",
            "var(--color-lime)",
            "var(--color-pink)",
            "var(--color-blue)",
            "var(--color-orange)",
          ];
          return (
            <div key={stat.id} className="group flex flex-col items-center gap-2 text-center">
              {/* Colored dot */}
              <span
                className="mb-1 inline-block h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                style={{ background: colors[i % colors.length] }}
              />
              <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                <CountUp
                  start={0}
                  end={stat.end}
                  decimals={stat.decimals}
                  duration={2.5}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
                {stat.label}
              </p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
