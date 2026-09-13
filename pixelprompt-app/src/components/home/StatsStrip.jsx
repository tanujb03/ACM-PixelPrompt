import * as ReactCountUp from "react-countup";
import { stats } from "../../data/mockData";
import Reveal from "../shared/Reveal";

// react-countup's UMD build double-wraps its default export under Vite's
// dev interop — unwrap defensively so this works in both dev and build.
const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;

export default function StatsStrip() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Reveal
        as="div"
        stagger={0.1}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <CountUp
                start={0}
                end={stat.end}
                decimals={stat.decimals}
                duration={2}
                prefix={stat.prefix}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
