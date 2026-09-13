import { useRef, useEffect } from "react";
import { gsap } from "../../lib/gsap";

// Large trust-style section inspired by crency.agency's "Trust comes from design"
export default function TrustSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trust-word", {
        opacity: 0,
        y: 100,
        rotateX: 30,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".trust-icon", {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const words = "Innovation comes from community, not curriculum.".split(" ");

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-28 sm:py-40"
    >
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(124,92,255,0.08),_transparent_70%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 text-center lg:flex-row lg:gap-16 lg:text-left">
        {/* Floating icon */}
        <div className="trust-icon flex-shrink-0">
          <div className="relative animate-float">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-rotate-slow"
              style={{ animationDuration: "30s" }}
            >
              <path
                d="M60 0L73.5 8L90 11L100 27L114 41L112 59L114 77L100 91L90 107L73.5 110L60 118L46.5 110L30 107L20 91L6 77L8 59L6 41L20 27L30 11L46.5 8L60 0Z"
                fill="var(--color-lime)"
                opacity="0.9"
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ animation: "rotate-slow-reverse 30s linear infinite" }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0d0221" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Giant headline */}
        <h2
          className="font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ perspective: "800px" }}
        >
          {words.map((word, i) => {
            const isHighlighted = word === "community,";
            return (
              <span
                key={i}
                className={`trust-word inline-block ${
                  isHighlighted
                    ? "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-lime)] bg-clip-text text-transparent"
                    : ""
                }`}
                style={{ marginRight: "0.25em" }}
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
