import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

/**
 * Dramatic scroll-triggered animation wrapper.
 * Creates cinematic section transitions with zoom, slide, and card effects.
 *
 * Variants:
 *   "zoom-in"      — section scales from 0.8 → 1 as it enters viewport
 *   "zoom-out"     — section starts at 1.1 and settles to 1
 *   "slide-up"     — slides up from below with momentum
 *   "slide-left"   — sweeps in from the left
 *   "slide-right"  — sweeps in from the right
 *   "card-fan"     — children slide up with heavy stagger like fanning cards
 *   "card-slide-lr"— children alternate sliding left/right
 *   "curtain"      — clip-path wipe reveal
 *   "rotate-in"    — rotates in with perspective
 *   "none"         — no animation (passthrough)
 */
export default function ScrollSlide({
  children,
  variant = "slide-up",
  as: Tag = "div",
  className = "",
  style,
  delay = 0,
  duration = 1,
  distance = 120,
  stagger = 0,
  start = "top 90%",
  once = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (variant === "none") return;

    const ctx = gsap.context(() => {
      if (variant === "card-fan") {
        // Each child slides up with heavy stagger
        const kids = Array.from(el.children);
        if (!kids.length) return;
        gsap.fromTo(
          kids,
          {
            opacity: 0,
            y: distance,
            scale: 0.9,
            rotateX: 8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: duration * 0.9,
            delay,
            stagger: stagger || 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: once ? "play none none none" : "play none none reverse",
            },
          }
        );
        return;
      }

      if (variant === "card-slide-lr") {
        // Alternating left/right slide-in
        const kids = Array.from(el.children);
        if (!kids.length) return;
        kids.forEach((kid, i) => {
          const fromLeft = i % 2 === 0;
          gsap.fromTo(
            kid,
            {
              opacity: 0,
              x: fromLeft ? -distance : distance,
              scale: 0.92,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration,
              delay: delay + i * (stagger || 0.12),
              ease: "power3.out",
              scrollTrigger: {
                trigger: kid,
                start,
                toggleActions: once ? "play none none none" : "play none none reverse",
              },
            }
          );
        });
        return;
      }

      // Single-element variants
      const from = {};
      const to = {};

      switch (variant) {
        case "zoom-in":
          Object.assign(from, { scale: 0.8, opacity: 0 });
          Object.assign(to, { scale: 1, opacity: 1 });
          break;
        case "zoom-out":
          Object.assign(from, { scale: 1.15, opacity: 0 });
          Object.assign(to, { scale: 1, opacity: 1 });
          break;
        case "slide-left":
          Object.assign(from, { x: -distance, opacity: 0 });
          Object.assign(to, { x: 0, opacity: 1 });
          break;
        case "slide-right":
          Object.assign(from, { x: distance, opacity: 0 });
          Object.assign(to, { x: 0, opacity: 1 });
          break;
        case "curtain":
          Object.assign(from, { clipPath: "inset(0 0 100% 0)", opacity: 0.3 });
          Object.assign(to, { clipPath: "inset(0 0 0% 0)", opacity: 1 });
          break;
        case "rotate-in":
          Object.assign(from, { rotateY: 15, rotateX: 8, opacity: 0, y: 60, scale: 0.9 });
          Object.assign(to, { rotateY: 0, rotateX: 0, opacity: 1, y: 0, scale: 1 });
          break;
        case "slide-up":
        default:
          Object.assign(from, { y: distance, opacity: 0 });
          Object.assign(to, { y: 0, opacity: 1 });
          break;
      }

      to.duration = duration;
      to.delay = delay;
      to.ease = "power3.out";
      to.scrollTrigger = {
        trigger: el,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      };

      gsap.fromTo(el, from, to);
    }, ref);

    return () => ctx.revert();
  }, [variant, delay, duration, distance, stagger, start, once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(variant === "rotate-in" || variant === "zoom-in" || variant === "zoom-out"
          ? { perspective: "1200px", transformStyle: "preserve-3d" }
          : {}),
        willChange: "transform, opacity",
      }}
    >
      {children}
    </Tag>
  );
}
