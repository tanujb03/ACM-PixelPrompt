import { site, footer } from "../../data/mockData";
import SocialLinks from "../shared/SocialLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

export default function Footer() {
  const { scrollToSection } = useActiveSection();

  return (
    <footer className="relative overflow-hidden bg-[var(--color-bg-deep)]">
      {/* ── Column links ── */}
      <div className="px-6 pt-16 pb-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Logo & affiliation */}
          <div className="col-span-2 sm:col-span-1">
            <button
              onClick={() => scrollToSection("home")}
              className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-[var(--color-text)]"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
                <path d="M8 22L16 8L24 22H8Z" fill="white" />
              </svg>
              {site.shortName}
            </button>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[var(--color-text-muted)]">
              {site.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.id}>
              <h4 className="text-xs font-semibold tracking-widest text-[var(--color-text)] uppercase">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.to)}
                      className="animated-underline text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[var(--color-text)] uppercase">
              Connect
            </h4>
            <div className="mt-4">
              <SocialLinks className="flex items-center gap-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Legal / back-link + copyright */}
      <div className="border-t border-[var(--color-border)] px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-xs text-[var(--color-text-muted)] sm:flex-row sm:justify-between sm:text-left">
          <a
            href={footer.backLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline transition-colors hover:text-[var(--color-text)]"
          >
            {footer.backLink.label}
          </a>
          <p>{footer.creditLine}</p>
          <p>{footer.copyrightLine}</p>
        </div>
      </div>
    </footer>
  );
}
