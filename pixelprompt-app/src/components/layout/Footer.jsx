import { Link } from "react-router-dom";
import { site, nav } from "../../data/mockData";
import SocialLinks from "../shared/SocialLinks";
import Reveal from "../shared/Reveal";
import MagneticButton from "../shared/MagneticButton";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-bg-deep)]">
      {/* ── Giant CTA Section ── */}
      <div className="relative px-6 pt-28 pb-20 sm:pt-40 sm:pb-28">
        {/* Blue starburst decoration */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 opacity-30">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="var(--color-blue)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="150,0 170,120 300,100 180,160 250,280 150,200 50,280 120,160 0,100 130,120" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Reveal as="div">
            <span className="mb-4 inline-block text-xs font-bold tracking-[0.25em] text-[var(--color-lime)] uppercase">
              Ready to Start?
            </span>
          </Reveal>

          <SplitTextReveal
            text="JOIN THE CHAPTER."
            as="h2"
            className="font-hero text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[10rem]"
          />

          <Reveal as="div" className="mt-8">
            <p className="mx-auto max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
              Get access to workshops, hackathons, mentorship, and a community
              of builders pushing each other to ship.
            </p>
          </Reveal>

          <Reveal as="div" className="mt-10">
            <MagneticButton
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--color-lime)] px-10 py-4 text-base font-bold text-[#1a1145] shadow-[0_6px_0_#9ec322] transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_4px_0_#9ec322] active:translate-y-1.5 active:shadow-[0_1px_0_#9ec322]"
            >
              Get started
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </Reveal>
        </div>
      </div>

      {/* ── Bottom info bar ── */}
      <div className="border-t border-[var(--color-border)] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              viewTransition
              className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-[var(--color-text)]"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
                <path d="M8 22L16 8L24 22H8Z" fill="white" />
              </svg>
              {site.name}
            </Link>
            <p className="mt-2 max-w-xs text-xs text-[var(--color-text-muted)]">
              {site.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                viewTransition
                className="animated-underline text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <SocialLinks />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--color-border)] px-6 py-5 text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} {site.name}. Built for ACM PixelPrompt by
        Tanuj, Krrish & Parth.
      </div>
    </footer>
  );
}
