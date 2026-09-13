export default function PersonCard({ person, showBio = false }) {
  return (
    <div className="glow-card tilt-card group flex flex-col items-center gap-4 p-6 text-center">
      <div className="relative overflow-hidden rounded-full">
        <img
          src={person.photo}
          alt={person.name}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Glow ring on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-transparent transition-colors duration-500 group-hover:border-[var(--color-accent)]/50" />
      </div>

      <div>
        <h3 className="font-display text-base font-semibold text-[var(--color-text)]">
          {person.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-[var(--color-accent)]">
          {person.role}
        </p>
      </div>

      {showBio && person.bio && (
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          {person.bio}
        </p>
      )}

      {person.quote && (
        <blockquote className="mt-2 border-l-2 border-[var(--color-accent)]/30 pl-3 text-left text-sm italic leading-relaxed text-[var(--color-text-muted)]">
          "{person.quote}"
        </blockquote>
      )}
    </div>
  );
}
