import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

const ActiveSectionContext = createContext({
  activeSection: "home",
  registerSection: () => {},
  scrollToSection: () => {},
});

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef(new Map());

  const registerSection = useCallback((id, element) => {
    if (element) {
      sectionRefs.current.set(id, element);
    } else {
      sectionRefs.current.delete(id);
    }
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = sectionRefs.current.get(id) || document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${id}`;
    }
  }, []);

  useEffect(() => {
    // Small delay to ensure all sections are mounted and registered
    const timer = setTimeout(() => {
      const elements = Array.from(sectionRefs.current.entries());
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          // Find the entry with the largest intersection ratio
          let best = null;
          let bestRatio = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
              bestRatio = entry.intersectionRatio;
              best = entry.target.id;
            }
          });

          // Fallback: if nothing has high ratio, use the one closest to top
          if (!best) {
            let closestDist = Infinity;
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const dist = Math.abs(entry.boundingClientRect.top);
                if (dist < closestDist) {
                  closestDist = dist;
                  best = entry.target.id;
                }
              }
            });
          }

          if (best) {
            setActiveSection(best);
          }
        },
        {
          // Multiple thresholds for fine-grained tracking
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
          // Shrink the observation zone to favor what's in the top half of viewport
          rootMargin: "-10% 0px -40% 0px",
        }
      );

      elements.forEach(([, el]) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, registerSection, scrollToSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

export default ActiveSectionContext;
