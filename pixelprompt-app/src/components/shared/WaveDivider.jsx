/**
 * Dramatic organic wave transition between sections — Crency style.
 * Use `variant` to pick the wave shape:
 *   - "dark-to-light": dark navy above → lavender below
 *   - "light-to-dark": lavender above → dark navy below
 */
export default function WaveDivider({
  variant = "dark-to-light",
  className = "",
}) {
  const isDarkToLight = variant === "dark-to-light";
  const topColor = isDarkToLight ? "#1a1145" : "#c8b8e6";
  const bottomColor = isDarkToLight ? "#c8b8e6" : "#1a1145";

  return (
    <div className={`relative w-full ${className}`} style={{ marginTop: "-1px", marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave-divider block w-full"
        preserveAspectRatio="none"
        style={{ height: "clamp(80px, 12vw, 200px)" }}
      >
        {/* Background fill for top */}
        <rect width="1440" height="200" fill={topColor} />
        {/* Organic wave path for bottom */}
        <path
          d={
            isDarkToLight
              ? "M0,60 C240,180 480,0 720,120 C960,240 1200,40 1440,100 L1440,200 L0,200 Z"
              : "M0,140 C240,20 480,200 720,80 C960,-40 1200,160 1440,100 L1440,200 L0,200 Z"
          }
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
