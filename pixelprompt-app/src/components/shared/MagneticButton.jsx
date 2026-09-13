import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";

// A button (or Link) that magnetically pulls toward the cursor on hover
// and shows a bubble-expand effect from the cursor position.
export default function MagneticButton({
  children,
  to,
  href,
  className = "",
  onClick,
  type = "button",
  strength = 0.3,
  ...rest
}) {
  const wrapRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      wrap.style.transform = `translate(${x * strength}px, ${y * strength}px)`;

      // Update bubble position CSS vars
      const btn = wrap.querySelector(".btn-bubble");
      if (btn) {
        btn.style.setProperty("--bubble-x", `${e.clientX - rect.left}px`);
        btn.style.setProperty("--bubble-y", `${e.clientY - rect.top}px`);
      }
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const wrap = wrapRef.current;
    if (wrap) wrap.style.transform = "translate(0, 0)";
  }, []);

  const inner = (
    <div
      ref={wrapRef}
      className="magnetic-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {to ? (
        <Link
          to={to}
          viewTransition
          className={`btn-bubble ${className}`}
          {...rest}
        >
          {children}
        </Link>
      ) : href ? (
        <a
          href={href}
          className={`btn-bubble ${className}`}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`btn-bubble ${className}`}
          {...rest}
        >
          {children}
        </button>
      )}
    </div>
  );

  return inner;
}
