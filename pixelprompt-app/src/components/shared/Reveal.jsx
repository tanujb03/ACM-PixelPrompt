import { useRef, useEffect } from "react";
import { gsap } from "../../lib/gsap";

// Wraps any section/block and fades + slides it in as it enters the viewport.
// Usage: <Reveal><FeatureBlock /></Reveal>
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  y = 40,
  duration = 0.8,
  delay = 0,
  stagger = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, duration, delay, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
