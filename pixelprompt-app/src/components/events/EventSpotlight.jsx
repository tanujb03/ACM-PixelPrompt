import { flagshipEvent } from "../../data/mockData";
import Reveal from "../shared/Reveal";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

const formatIcons = {
  "blind-coding": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <path d="M3 3l18 18" />
    </svg>
  ),
  "relay-coding": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17V7a2 2 0 0 1 2-2h3" />
      <path d="M20 7v10a2 2 0 0 1-2 2h-3" />
      <path d="m6 4-3 3 3 3M18 20l3-3-3-3" />
    </svg>
  ),
  "bug-hunt": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="7" width="8" height="12" rx="4" />
      <path d="M8 12H4M20 12h-4M9 5l-2-2M15 5l2-2M9 19l-2 2M15 19l2 2M8 9H5M8 15H5M19 9h-3M19 15h-3" />
    </svg>
  ),
};

export default function EventSpotlight() {
  return (
    <Reveal as="section" className="px-6 py-16 sm:py-20">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-6 sm:p-12"
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-purple) 55%, var(--color-accent) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease infinite",
        }}
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,_rgba(255,255,255,0.15),_transparent_60%)]" />

        <div className="relative z-10">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-lime)] uppercase">
            Flagship Event {flagshipEvent.isIllustrative && "· illustrative format"}
          </span>
          <h2 className="mt-3 font-hero text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
            {flagshipEvent.name}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {flagshipEvent.description}
          </p>
        </div>

        <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {flagshipEvent.formats.map((format, i) => (
            <CardContainer key={format.id} className="w-full">
              <CardBody className="flex w-full flex-col gap-4 rounded-2xl border border-white/15 bg-[#150734]/70 p-6 backdrop-blur-md">
                <CardItem translateZ="40" className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-lime)]/15 text-[var(--color-lime)]">
                    {formatIcons[format.id]}
                  </span>
                  <span className="font-display text-xs font-bold text-white/30">
                    0{i + 1}
                  </span>
                </CardItem>
                <CardItem translateZ="60" as="h3" className="font-display text-base font-semibold text-white">
                  {format.name}
                </CardItem>
                <CardItem translateZ="30" as="p" className="text-sm leading-relaxed text-white/70">
                  {format.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
