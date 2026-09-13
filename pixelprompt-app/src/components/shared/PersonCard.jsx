// Generic photo/name/role card, reused across faculty, officer, and
// hall-of-fame sections. Pass `children` for any per-section extra copy
// (a quote, a bio line, a contribution note).
export default function PersonCard({ photo, name, role, children }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
      <img
        src={photo}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
        alt={name}
      />
      <div>
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm text-[var(--color-text-muted)]">{role}</p>
      </div>
      {children}
    </div>
  );
}
