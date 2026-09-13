import { Link } from "react-router-dom";
import { finalCta } from "../../data/mockData";
import Reveal from "../shared/Reveal";

export default function FinalCta() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <Reveal
        as="div"
        className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl bg-[linear-gradient(135deg,_var(--color-accent)_0%,_var(--color-accent-2)_100%)] px-8 py-16 text-center sm:py-20"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {finalCta.headline}
        </h2>
        <p className="max-w-xl text-base text-white/85">{finalCta.subhead}</p>
        <Link
          to={finalCta.cta.to}
          viewTransition
          className="mt-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          {finalCta.cta.label}
        </Link>
      </Reveal>
    </section>
  );
}
