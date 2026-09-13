// Floating decorative SVG shapes inspired by crency.agency hero decorations.
// Each shape continuously rotates and bobs, with an optional stat label.

const shapes = {
  star: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 134" fill={color}>
      <path d="M129.93 50.65L116.23 48.98C111.75 48.43 109.43 43.37 111.95 39.64L119.65 28.25C123.1 23.16 117.57 16.8 112.01 19.47L99.58 25.44C95.51 27.39 90.81 24.38 90.9 19.89L91.2 6.16C91.33 0.02 83.22-2.35 79.99 2.88L72.78 14.59C70.42 18.42 64.83 18.42 62.47 14.59L55.25 2.88C52.03-2.35 43.92 0.02 44.05 6.16L44.34 19.89C44.44 24.38 39.74 27.39 35.67 25.44L23.24 19.47C17.68 16.8 12.15 23.16 15.59 28.25L23.3 39.64C25.82 43.37 23.5 48.43 19.02 48.98L5.32 50.65C-0.81 51.39-2.01 59.71 3.66 62.15L16.33 67.59C20.47 69.37 21.27 74.88 17.79 77.74L7.18 86.52C2.43 90.44 5.94 98.09 12.03 97.09L25.64 94.85C30.1 94.11 33.76 98.32 32.39 102.6L28.23 115.69C26.36 121.55 33.47 126.1 38.05 121.97L48.28 112.77C51.63 109.75 57 111.32 58.18 115.66L61.79 128.91C63.4 134.84 71.85 134.84 73.46 128.91L77.07 115.66C78.25 111.32 83.61 109.75 86.96 112.77L97.2 121.97C101.78 126.1 108.89 121.55 107.02 115.69L102.85 102.6C101.49 98.32 105.15 94.11 109.61 94.85L123.22 97.09C129.31 98.09 132.82 90.44 128.07 86.52L117.45 77.74C113.98 74.88 114.78 69.37 118.92 67.59L131.59 62.15C137.26 59.71 136.06 51.39 129.93 50.65Z" />
    </svg>
  ),
  decagon: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 123" fill={color}>
      <path d="M58.5 0L75.78 8.29L94.65 11.69L103.74 28.5L117 42.29L114.42 61.21L117 80.12L103.74 93.91L94.65 110.72L75.78 114.12L58.5 122.41L41.22 114.12L22.35 110.72L13.26 93.91L0 80.12L2.58 61.21L0 42.29L13.26 28.5L22.35 11.69L41.22 8.29L58.5 0Z" />
    </svg>
  ),
  pill: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 50" fill={color}>
      <rect width="120" height="50" rx="25" />
    </svg>
  ),
  diamond: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill={color}>
      <rect width="70" height="70" rx="12" transform="translate(50,0) rotate(45)" />
    </svg>
  ),
  circle: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill={color}>
      <circle cx="50" cy="50" r="48" />
    </svg>
  ),
};

export default function FloatingShape({
  shape = "star",
  color = "#c2ec40",
  size = 80,
  label,
  num,
  className = "",
  rotateSpeed = "20s",
  reverse = false,
  floatDelay = 0,
  style = {},
}) {
  const ShapeSvg = shapes[shape];

  return (
    <div
      className={`hero-shape ${className}`}
      style={{
        width: size,
        height: size,
        animation: `float ${4 + floatDelay}s ease-in-out ${floatDelay}s infinite`,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          animation: `${reverse ? "rotate-slow-reverse" : "rotate-slow"} ${rotateSpeed} linear infinite`,
        }}
      >
        {ShapeSvg ? ShapeSvg(color) : null}
      </div>
      {(label || num) && (
        <div
          className="hero-shape-label"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: `${reverse ? "rotate-slow" : "rotate-slow-reverse"} ${rotateSpeed} linear infinite`,
            color: "#fff",
          }}
        >
          {num && <span className="hero-shape-num">{num}</span>}
          {label && <span>{label}</span>}
        </div>
      )}
    </div>
  );
}
