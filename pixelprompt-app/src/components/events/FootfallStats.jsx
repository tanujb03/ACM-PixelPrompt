import { footfallStats } from "../../data/events";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function FootfallStats() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text="Footfall"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.12}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {footfallStats.map((item) => (
            <div
              key={item.id}
              className="glow-card group flex flex-col items-center gap-3 p-8 text-center"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-[var(--color-lime)] sm:text-4xl">
                {item.value}
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
