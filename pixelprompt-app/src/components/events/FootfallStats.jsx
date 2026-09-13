import { footfallStats } from "../../data/events";
import Reveal from "../shared/Reveal";

const icons = [
  <svg key="crowd" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="17.5" cy="8.5" r="2.5" />
    <path d="M15.5 14.2c2.9.4 5 2.6 5 5.8" />
  </svg>,
  <svg key="ticket" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 0 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4Z" />
    <path d="M9 7v10" strokeDasharray="2 3" />
  </svg>,
  <svg key="building" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V7l8-4 8 4v14" />
    <path d="M4 21h16M9 21v-5h6v5M9 11h.01M15 11h.01M9 7h.01M15 7h.01" />
  </svg>,
];

export default function FootfallStats() {
  return (
    <section className="px-6 py-6 sm:py-10">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16"
        style={{ background: "linear-gradient(120deg, var(--color-pink) 0%, var(--color-accent) 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_100%,_rgba(255,255,255,0.18),_transparent_60%)]" />

        <Reveal
          as="div"
          stagger={0.12}
          className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {footfallStats.map((item, i) => (
            <div key={item.id} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <span className="text-white/80">{icons[i]}</span>
              <p className="font-hero text-4xl font-black tracking-tight text-white sm:text-5xl">
                {item.value}
              </p>
              <p className="max-w-[16rem] text-sm font-medium text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
