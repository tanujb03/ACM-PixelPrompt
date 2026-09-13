import { useState } from "react";
import { contact } from "../../data/mockData";
import SocialLinks from "../shared/SocialLinks";

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contact.info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-surface)]/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20">
      {/* Background glow orb */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[var(--color-lime)]/10 blur-3xl" />

      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
        Let&apos;s build the future together.
      </h2>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
        Have questions about memberships, hackathons, or partnership opportunities? We&apos;re here for you.
      </p>

      {/* Info List */}
      <div className="mt-8 space-y-4">
        {/* Email card */}
        <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-[var(--color-lime)]/30 hover:bg-white/[0.06]">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-lime)]/15 text-[var(--color-lime)]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Email Us</p>
              <a href={`mailto:${contact.info.email}`} className="text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-lime)]">
                {contact.info.email}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="rounded-lg border border-white/10 px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)] transition hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]"
          >
            {copied ? "Copied! ✓" : "Copy"}
          </button>
        </div>

        {/* Location card */}
        <div className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Location</p>
            <p className="text-sm font-medium text-[var(--color-text)]">
              {contact.info.location}
            </p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="mb-3 text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
          Follow our socials
        </p>
        <SocialLinks className="flex items-center gap-3" />
      </div>
    </div>
  );
}

