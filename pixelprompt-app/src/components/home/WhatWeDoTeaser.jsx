import { whatWeDo } from "../../data/mockData";
import SplitTextReveal from "../shared/SplitTextReveal";
import Reveal from "../shared/Reveal";

// Rotating flower/asterisk SVG component (matches Crency's decorative element)
function FlowerSVG({ color = "currentColor", className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`flower-spin ${className}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="100"
          rx="18"
          ry="50"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
    </svg>
  );
}

const cardStyles = [
  { colorClass: "service-card-lime", flowerColor: "#150734", textColor: "#150734" },
  { colorClass: "service-card-pink", flowerColor: "rgba(255,255,255,0.3)", textColor: "white" },
  { colorClass: "service-card-blue", flowerColor: "rgba(255,255,255,0.25)", textColor: "white" },
  { colorClass: "service-card-purple", flowerColor: "rgba(255,255,255,0.2)", textColor: "white" },
];

export default function WhatWeDoTeaser() {
  return (
    <section className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SplitTextReveal
            text={whatWeDo.heading}
            as="h2"
            className="font-hero text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl"
          />
          <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">
            {whatWeDo.subheading}
          </p>
        </div>

        <Reveal
          as="div"
          stagger={0.15}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {whatWeDo.items.map((item, i) => {
            const style = cardStyles[i % cardStyles.length];
            return (
              <div key={item.id} className={`service-card ${style.colorClass}`}>
                <h3
                  className="font-hero text-2xl font-black uppercase tracking-tight sm:text-3xl"
                  style={{ color: style.textColor }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-4 max-w-xs text-sm leading-relaxed sm:text-base"
                  style={{ color: style.textColor === "white" ? "rgba(255,255,255,0.7)" : "rgba(21,7,52,0.6)" }}
                >
                  {item.description}
                </p>

                <div className="my-6 flex flex-1 items-center justify-center">
                  <FlowerSVG color={style.flowerColor} className="h-28 w-28 sm:h-32 sm:w-32" />
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
