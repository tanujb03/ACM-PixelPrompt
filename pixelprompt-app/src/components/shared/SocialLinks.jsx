import { social } from "../../data/mockData";
import SocialIcon from "./SocialIcon";

export default function SocialLinks({ className = "flex items-center gap-4" }) {
  return (
    <div className={className}>
      {social.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
        >
          <SocialIcon id={item.id} />
        </a>
      ))}
    </div>
  );
}
