import { Link } from "react-router-dom";
import { finalCta } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import MagneticButton from "../shared/MagneticButton";
import FloatingShape from "../shared/FloatingShape";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <Reveal
        as="div"
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl px-8 py-20 text-center sm:py-24"
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-2) 50%, var(--color-accent) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 6s ease infinite",
        }}
      >
        {/* Floating decorations */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div style={{ position: "absolute", top: "10%", left: "5%" }}>
            <FloatingShape shape="star" color="rgba(255,255,255,0.2)" size={50} rotateSpeed="15s" />
          </div>
          <div style={{ position: "absolute", bottom: "10%", right: "8%" }}>
            <FloatingShape shape="circle" color="rgba(255,255,255,0.15)" size={40} rotateSpeed="20s" reverse floatDelay={1} />
          </div>
        </div>

        {/* Glow overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_50%_50%_at_50%_30%,_rgba(255,255,255,0.1),_transparent)]" />

        <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {finalCta.headline}
        </h2>
        <p className="relative max-w-xl text-base text-white/80">
          {finalCta.subhead}
        </p>
        <div className="relative">
          <MagneticButton
            to={finalCta.cta.to}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0d0221] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            {finalCta.cta.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
