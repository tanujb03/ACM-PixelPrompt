// PLACEHOLDER — Parth refines styling from 6:00 PM onward.
import { Link } from "react-router-dom";
import { site, nav } from "../../data/mockData";
import SocialLinks from "../shared/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Link
            to="/"
            viewTransition
            className="text-lg font-semibold tracking-tight text-[var(--color-text)]"
          >
            {site.name}
          </Link>
          <p className="max-w-xs text-center text-sm text-[var(--color-text-muted)] sm:text-left">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
          {nav.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              viewTransition
              className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SocialLinks />
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-6 text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} {site.name}. Built for ACM PixelPrompt by Tanuj, Krrish & Parth.
      </div>
    </footer>
  );
}
