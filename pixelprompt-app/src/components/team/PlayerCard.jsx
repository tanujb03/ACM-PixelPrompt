// Matches the two AI-reference lineup mockups in `images/Football Field/`:
// gold-framed cards for the Core Team image, silver-framed cards for the
// Senior Team image. Source photos have a name/role strip baked into the
// bottom ~20%, so the wrapper crops to a slightly-taller-than-square window
// (object-position: top) to hide it — the card supplies its own name/role
// pills instead, styled to match whichever reference image it belongs to.
const THEME = {
  gold: {
    frame: "linear-gradient(150deg, #fff4c8 0%, #f0c04a 45%, #a8760f 100%)",
    glow: "0 0 0 1px rgba(244,196,48,0.35), 0 10px 24px rgba(168,118,15,0.35)",
    nameBg: "#fdfcf7",
    nameText: "#150734",
    roleBg: "#150734",
    roleText: "#f0c04a",
  },
  silver: {
    frame: "linear-gradient(150deg, #ffffff 0%, #d7dde4 45%, #94a0ad 100%)",
    glow: "0 0 0 1px rgba(180,190,200,0.35), 0 10px 24px rgba(30,20,60,0.3)",
    nameBg: "#150734",
    nameText: "#ffffff",
    roleBg: "#150734",
    roleText: "#c9bef2",
  },
};

export default function PlayerCard({ member, photoSrc, theme = "gold", size = 96, onSelect }) {
  const palette = THEME[theme];

  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="group flex flex-col items-center rounded-2xl p-[3px] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
      style={{ width: size, background: palette.frame, boxShadow: palette.glow }}
    >
      <span className="relative block w-full overflow-hidden rounded-[0.85rem]" style={{ aspectRatio: "1.05 / 1" }}>
        <img
          src={photoSrc}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          style={{
            maskImage: "radial-gradient(ellipse 78% 78% at 50% 38%, black 60%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 78% 78% at 50% 38%, black 60%, transparent 100%)",
          }}
        />
      </span>

      <span
        className="-mt-2 w-[94%] rounded-md px-1.5 py-1 text-center text-[10px] leading-[1.15] font-bold tracking-tight uppercase sm:text-[14px]"
        style={{ background: palette.nameBg, color: palette.nameText }}
      >
        {member.name}
      </span>
      <span
        className="mt-1 w-[90%] rounded-md px-1.5 py-1 text-center text-[8px] leading-[1.15] font-semibold tracking-wide uppercase sm:text-[11px]"
        style={{ background: palette.roleBg, color: palette.roleText }}
      >
        {member.role}
      </span>
    </button>
  );
}
