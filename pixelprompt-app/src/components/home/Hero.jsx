import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import FloatingShape from "../shared/FloatingShape";
import MagneticButton from "../shared/MagneticButton";
import { hero } from "../../data/mockData";

export default function Hero() {
  const ref = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Stagger in each line of giant text
      tl.from(".hero-line", {
        opacity: 0,
        y: 120,
        rotateX: 25,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      })
        .from(
          ".hero-float",
          {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      // SVG ellipse line draw
      if (lineRef.current) {
        const path = lineRef.current.querySelector(".draw-path");
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 3,
            delay: 0.8,
            ease: "power2.inOut",
          });
        }
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden px-4 pt-24 pb-16 sm:px-8 sm:pt-28 md:pt-32"
    >
      {/* Background radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_rgba(124,92,255,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,_rgba(200,230,46,0.04),_transparent_50%)]" />
      </div>

      {/* SVG elliptical curve threading through the text */}
      <div ref={lineRef} className="pointer-events-none absolute inset-0 z-[3]">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          <path
            className="draw-path"
            d="M-50,350 C200,100 400,500 720,150 C1000,-100 1100,600 1200,300 C1300,100 1350,500 1500,350"
            stroke="var(--color-lime)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Small circles at curve points */}
          <circle cx="200" cy="260" r="5" fill="none" stroke="var(--color-lime)" strokeWidth="1.5" />
          <circle cx="720" cy="150" r="5" fill="none" stroke="var(--color-lime)" strokeWidth="1.5" />
          <circle cx="420" cy="380" r="5" fill="none" stroke="var(--color-lime)" strokeWidth="1.5" />
          <circle cx="1000" cy="280" r="5" fill="none" stroke="var(--color-lime)" strokeWidth="1.5" />
          <circle cx="1200" cy="300" r="5" fill="none" stroke="var(--color-lime)" strokeWidth="1.5" />
          {/* Elliptical loop */}
          <ellipse
            cx="950"
            cy="250"
            rx="120"
            ry="80"
            fill="none"
            stroke="var(--color-lime)"
            strokeWidth="2.5"
            className="draw-path"
            transform="rotate(-15 950 250)"
          />
        </svg>
      </div>

      {/* Floating decorative sticker shapes — clustered along the right
          margin so they never collide with the hero text column on the left */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="hero-float" style={{ position: "absolute", top: "6%", right: "4%" }}>
          <FloatingShape
            shape="star"
            color="#f72585"
            size={95}
            num="45+"
            label="events hosted"
            rotateSpeed="25s"
          />
        </div>
        <div className="hero-float" style={{ position: "absolute", top: "20%", right: "20%" }}>
          <FloatingShape
            shape="decagon"
            color="#ea3323"
            size={80}
            label="3 hackathon wins"
            rotateSpeed="18s"
            reverse
          />
        </div>
        <div className="hero-float" style={{ position: "absolute", top: "36%", right: "3%" }}>
          <FloatingShape
            shape="pill"
            color="#4361ee"
            size={110}
            label="Since 2019"
            rotateSpeed="0s"
            floatDelay={1}
          />
        </div>
        <div className="hero-float" style={{ position: "absolute", top: "52%", right: "19%" }}>
          <FloatingShape
            shape="pill"
            color="#c8e62e"
            size={120}
            label="4 active SIGs"
            rotateSpeed="0s"
            floatDelay={0.5}
          />
        </div>
        <div className="hero-float" style={{ position: "absolute", bottom: "16%", right: "5%" }}>
          <FloatingShape
            shape="star"
            color="#f5f5f0"
            size={78}
            num="500+"
            label="students engaged"
            rotateSpeed="30s"
            reverse
            floatDelay={1.2}
          />
        </div>
        <div className="hero-float" style={{ position: "absolute", bottom: "4%", right: "22%" }}>
          <FloatingShape
            shape="circle"
            color="#7209b7"
            size={85}
            num="6 years"
            label="of building"
            rotateSpeed="0s"
            floatDelay={0.8}
          />
        </div>
      </div>

      {/* GIANT UPPERCASE TEXT — Crency style */}
      <div className="relative z-[4] flex min-h-[70vh] flex-col justify-center">
        <span className="hero-line mb-4 block text-xs font-bold tracking-[0.25em] text-[var(--color-lime)] uppercase sm:text-sm">
          {hero.eyebrow}
        </span>
        <h1 className="hero-giant select-none" aria-label={hero.headline}>
          <span className="hero-line block text-[9vw] leading-[0.95] sm:text-[8vw] md:text-[8vw] lg:text-[7.5vw]">
            Where Computing
          </span>
          <span className="hero-line block text-[9vw] leading-[0.95] sm:text-[8vw] md:text-[8vw] lg:text-[7.5vw]">
            Minds Come Together.
          </span>
        </h1>

        <p className="hero-line mt-8 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          {hero.subhead}
        </p>

        <div className="hero-line mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton
            to={hero.primaryCta.to}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-lime)] px-7 py-3.5 text-sm font-bold text-[#150734]"
          >
            {hero.primaryCta.label}
          </MagneticButton>
          <MagneticButton
            to={hero.secondaryCta.to}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
          >
            {hero.secondaryCta.label}
          </MagneticButton>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
