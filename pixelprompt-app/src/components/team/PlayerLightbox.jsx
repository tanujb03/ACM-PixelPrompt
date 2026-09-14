import { useEffect } from "react";

const THEME = {
  gold: { nameBg: "#fdfcf7", nameText: "#150734", roleBg: "#150734", roleText: "#f0c04a", ring: "rgba(244,196,48,0.5)" },
  silver: { nameBg: "#150734", nameText: "#ffffff", roleBg: "#150734", roleText: "#c9bef2", ring: "rgba(200,210,220,0.5)" },
};

// Per the content doc's Team page build notes: clicking a member only zooms
// into their photo + overlays name/designation — no navigation anywhere.
export default function PlayerLightbox({ member, photoSrc, theme = "gold", onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!member) return null;
  const palette = THEME[theme];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0420]/85 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name}, ${member.role}`}
    >
      <div
        className="relative flex w-full max-w-xs flex-col items-center rounded-3xl p-4 sm:max-w-sm"
        style={{ background: "var(--color-surface)", boxShadow: `0 0 0 1px ${palette.ring}, 0 30px 60px rgba(0,0,0,0.5)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-text)] shadow-lg transition-transform hover:scale-110"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <span className="relative block w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "1.05 / 1" }}>
          <img src={photoSrc} alt={member.name} className="h-full w-full object-cover object-top" />
        </span>

        <span
          className="-mt-4 w-[85%] rounded-lg px-3 py-2 text-center text-base font-bold tracking-tight uppercase sm:text-lg"
          style={{ background: palette.nameBg, color: palette.nameText }}
        >
          {member.name}
        </span>
        <span
          className="mt-1 w-[75%] rounded-lg px-3 py-1.5 text-center text-xs font-semibold tracking-wide uppercase sm:text-sm"
          style={{ background: palette.roleBg, color: palette.roleText }}
        >
          {member.role}
        </span>
      </div>
    </div>
  );
}
