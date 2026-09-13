import { Link } from "react-router-dom";
import { verticals } from "../../data/mockData";
import VerticalCard from "../shared/VerticalCard";
import Reveal from "../shared/Reveal";

export default function WhatWeDoTeaser() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What We Do
          </h2>
          <p className="max-w-xl text-sm text-[var(--color-text-muted)]">
            Four active special interest groups, each running their own workshops and projects.
          </p>
        </div>

        <Reveal
          as="div"
          stagger={0.08}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {verticals.map((vertical) => (
            <VerticalCard key={vertical.id} vertical={vertical} />
          ))}
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Link
            to="/about"
            viewTransition
            className="text-sm font-semibold text-[var(--color-accent)] transition hover:opacity-80"
          >
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  );
}
