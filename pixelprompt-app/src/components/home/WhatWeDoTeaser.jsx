import { Link } from "react-router-dom";
import { verticals } from "../../data/mockData";
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

// Map verticals to the 3 Crency-style card configurations
const cardConfigs = [
  {
    verticalId: "acm-w",
    colorClass: "service-card-lime",
    flowerColor: "#1a1145",
    textColor: "#1a1145",
    mutedColor: "rgba(26,17,69,0.6)",
    buttonClass: "bg-[#1a1145] text-white",
    ctaLabel: "explore ACM-W",
  },
  {
    verticalId: "sig-ai",
    colorClass: "service-card-pink",
    flowerColor: "rgba(255,255,255,0.3)",
    textColor: "white",
    mutedColor: "rgba(255,255,255,0.7)",
    buttonClass: "bg-white/20 text-white border border-white/30",
    ctaLabel: "explore SIG-AI",
  },
  {
    verticalId: "sig-web-cloud",
    colorClass: "service-card-purple",
    flowerColor: "rgba(255,255,255,0.2)",
    textColor: "white",
    mutedColor: "rgba(255,255,255,0.6)",
    buttonClass: "bg-white/20 text-white border border-white/30",
    ctaLabel: "explore SIG-Web",
  },
];

export default function WhatWeDoTeaser() {
  return (
    <section className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section heading — Crency style centered uppercase */}
        <div className="mb-16 text-center">
          <SplitTextReveal
            text="What Are We Building For You?"
            as="h2"
            className="font-hero text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl"
          />
        </div>

        {/* 3-column service cards grid */}
        <Reveal
          as="div"
          stagger={0.15}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {cardConfigs.map((config) => {
            const vertical = verticals.find((v) => v.id === config.verticalId);
            if (!vertical) return null;

            return (
              <div
                key={config.verticalId}
                className={`service-card ${config.colorClass}`}
              >
                {/* Card title */}
                <h3
                  className="font-hero text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl"
                  style={{ color: config.textColor }}
                >
                  {vertical.name}
                </h3>

                {/* Card description */}
                <p
                  className="mt-4 max-w-xs text-sm leading-relaxed sm:text-base"
                  style={{ color: config.mutedColor }}
                >
                  {vertical.description}
                </p>

                {/* Rotating flower decoration */}
                <div className="my-6 flex-1 flex items-center justify-center">
                  <FlowerSVG
                    color={config.flowerColor}
                    className="h-32 w-32 sm:h-40 sm:w-40"
                  />
                </div>

                {/* CTA button at bottom */}
                <Link
                  to="/about"
                  viewTransition
                  className={`mt-auto inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105 ${config.buttonClass}`}
                >
                  {config.ctaLabel}
                </Link>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
