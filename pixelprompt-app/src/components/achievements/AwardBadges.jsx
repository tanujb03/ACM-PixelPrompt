import { achievements } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function AwardBadges() {
  const badgeColors = [
    { bg: "var(--color-lime)", text: "#0d0221" },
    { bg: "var(--color-accent)", text: "#fff" },
    { bg: "var(--color-pink)", text: "#fff" },
  ];

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SplitTextReveal
          text="Awards & Recognition"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.12}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {achievements.awards.map((award, i) => {
            const color = badgeColors[i % badgeColors.length];
            return (
              <div
                key={award.id}
                className="glow-card group flex flex-col items-center gap-4 p-8 text-center"
              >
                {/* Badge icon */}
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: color.bg }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>

                <h3 className="font-display text-lg font-bold text-[var(--color-text)]">
                  {award.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {award.issuer}
                </p>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: `color-mix(in srgb, ${color.bg} 20%, transparent)`, color: color.bg }}
                >
                  {award.year}
                </span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
