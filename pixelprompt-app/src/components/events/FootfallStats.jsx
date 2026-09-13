import * as ReactCountUp from "react-countup";
import { events } from "../../data/mockData";
import Reveal from "../shared/Reveal";

const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;

export default function FootfallStats() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Footfall by Event Type
        </h2>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {events.footfall.map((item) => (
            <div key={item.id} className="text-center">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
