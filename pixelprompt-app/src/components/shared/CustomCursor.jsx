import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-you">
      {/* Lime arrow pointer */}
      <svg
        className="cursor-you-arrow"
        viewBox="0 0 24 24"
        fill="var(--color-lime)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
      {/* "You" pill label */}
      <span className="cursor-you-label">You</span>
    </div>
  );
}
