import { useRef, useEffect } from "react";
import { gsap } from "../../lib/gsap";

// Splits text into individual words (or chars) and staggers them in with GSAP.
// Usage: <SplitTextReveal text="Hello World" />
export default function SplitTextReveal({
  text,
  as: Tag = "h2",
  className = "",
  splitBy = "word", // "word" or "char"
  delay = 0,
  duration = 0.7,
  stagger = 0.05,
  y = 60,
  triggerStart = "top 85%",
  once = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(".split-item");
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text, delay, duration, stagger, y, triggerStart, once]);

  const items =
    splitBy === "char"
      ? text.split("").map((char, i) => (
          <span
            key={i}
            className="split-item split-char"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))
      : text.split(" ").map((word, i) => (
          <span
            key={i}
            className="split-item split-word"
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word}
          </span>
        ));

  return (
    <Tag ref={ref} className={className} style={{ perspective: "600px" }}>
      {items}
    </Tag>
  );
}
