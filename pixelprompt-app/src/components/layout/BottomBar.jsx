import { useActiveSection, SECTIONS } from "../../context/ActiveSectionContext";

export default function BottomBar() {
  const { activeSection, scrollToSection } = useActiveSection();

  // Find current and get display label
  const currentLabel = SECTIONS.find((s) => s.id === activeSection)?.label || "Home";

  // Find the next section for the right-side link
  const currentIdx = SECTIONS.findIndex((s) => s.id === activeSection);
  const nextSection = SECTIONS[(currentIdx + 1) % SECTIONS.length];

  return (
    <div className="bottom-bar hidden md:flex">
      <button
        onClick={() => scrollToSection("home")}
        className="bottom-bar-section"
      >
        <span className="bottom-bar-dot" />
        <span>
          Viewing: <strong>{currentLabel}</strong>
        </span>
      </button>

      <button
        onClick={() => scrollToSection("contact")}
        className="bottom-bar-cta"
      >
        join the chapter
      </button>

      <button
        onClick={() => scrollToSection(nextSection.id)}
        className="bottom-bar-section"
      >
        <span>
          Next: <strong>{nextSection.label}</strong>
        </span>
        <span className="bottom-bar-dot" />
      </button>
    </div>
  );
}
