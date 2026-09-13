import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as ReactCountUp from "react-countup";
import { hero } from "../../data/mockData";
import { gsap } from "../../lib/gsap";

// react-countup's UMD build double-wraps its default export under Vite's
// dev interop — unwrap defensively so this works in both dev and build.
const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-surface)_0%,_var(--color-bg)_60%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="hero-item mb-6 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-text-muted)] uppercase">
          {hero.eyebrow}
        </span>

        <h1 className="hero-item text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl">
          {hero.headline}
        </h1>

        <p className="hero-item mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
          {hero.subhead}
        </p>

        <div className="hero-item mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to={hero.primaryCta.to}
            viewTransition
            className="rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            to={hero.secondaryCta.to}
            viewTransition
            className="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <div className="hero-item mt-12 flex flex-col items-center">
          <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <CountUp
              start={0}
              end={hero.stat.end}
              decimals={hero.stat.decimals}
              duration={2}
              prefix={hero.stat.prefix}
              suffix={hero.stat.suffix}
              enableScrollSpy
              scrollSpyOnce
            />
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {hero.stat.label}
          </p>
        </div>
      </div>
    </section>
  );
}
