import { about } from "../../data/mockData";
import Reveal from "../shared/Reveal";

export default function WhyJoinList() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Why Join
        </h2>

        <Reveal
          as="div"
          stagger={0.06}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {about.whyJoin.map((item, i) => (
            <div key={item.id} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-sm font-semibold text-[var(--color-accent)]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
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
