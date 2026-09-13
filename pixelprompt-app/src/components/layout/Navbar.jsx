import { useState, useEffect, useRef } from "react";
import { site, nav } from "../../data/mockData";
import MagneticButton from "../shared/MagneticButton";
import { useActiveSection } from "../../context/ActiveSectionContext";
import { gsap } from "../../lib/gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef(null);
  const headerRef = useRef(null);
  const { activeSection, scrollToSection } = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (!mobileRef.current) return;
    if (isOpen) {
      const links = mobileRef.current.querySelectorAll(".mobile-nav-item");
      gsap.fromTo(
        links,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "top-2" : "top-5"
      }`}
      style={{ width: "min(92vw, 820px)" }}
    >
      <nav
        className={`glass flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(13,2,33,0.85)] shadow-[0_4px_30px_rgba(124,92,255,0.1)]"
            : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 pl-3 font-display text-lg font-bold tracking-tight text-[var(--color-text)]"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
            <path d="M8 22L16 8L24 22H8Z" fill="white" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">{site.shortName}</span>
        </button>

        {/* Desktop nav links with roll-hover effect */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                <span className="menu-roll">
                  <span className="menu-roll-stack">
                    <span className="menu-roll-line">{link.label}</span>
                    <span className="menu-roll-line text-[var(--color-lime)]">
                      {link.label}
                    </span>
                  </span>
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--color-accent)] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <MagneticButton
            to={nav.cta.to}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white"
          >
            {nav.cta.label}
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full transition hover:bg-[var(--color-surface)] md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-[var(--color-text)] transition-all duration-300 ${
              isOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[var(--color-text)] transition-all duration-300 ${
              isOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          ref={mobileRef}
          className="glass mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {nav.links.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`mobile-nav-item rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  isActive
                    ? "bg-[var(--color-surface-2)] text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick(nav.cta.to)}
            className="mobile-nav-item mt-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
          >
            {nav.cta.label}
          </button>
        </div>
      )}
    </header>
  );
}
