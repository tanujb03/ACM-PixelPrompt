import { verticals } from "../../data/mockData";
import VerticalCard from "../shared/VerticalCard";
import Reveal from "../shared/Reveal";

export default function VerticalsGrid() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Our Verticals & SIGs
        </h2>

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {verticals.map((vertical) => (
            <VerticalCard key={vertical.id} vertical={vertical} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
