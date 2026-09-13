// PLACEHOLDER — Parth refines styling from 6:00 PM onward.
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { site, nav } from "../../data/mockData";

const linkClasses = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive
      ? "text-[var(--color-text)]"
      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          viewTransition
          className="text-lg font-semibold tracking-tight text-[var(--color-text)]"
          onClick={() => setIsOpen(false)}
        >
          [Logo] {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              viewTransition
              className={linkClasses}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to={nav.cta.to}
          viewTransition
          className="hidden rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-block"
        >
          {nav.cta.label}
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text)] transition hover:bg-[var(--color-surface)] md:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 md:hidden">
          {nav.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              viewTransition
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to={nav.cta.to}
            viewTransition
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:opacity-90"
          >
            {nav.cta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
