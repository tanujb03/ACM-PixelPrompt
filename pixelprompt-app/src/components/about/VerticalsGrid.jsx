import { about } from "../../data/mockData";
import VerticalCard from "../shared/VerticalCard";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";
import sigAi from "../../assets/images/about/sig-ai.jpg";
import sigSec from "../../assets/images/about/sig-sec.png";
import sigCp from "../../assets/images/about/sig-cp.jpg";
import sigWeb from "../../assets/images/about/sig-web.jpg";

const sigImages = {
  "sig-ai": sigAi,
  "sig-sec": sigSec,
  "sig-cp": sigCp,
  "sig-web": sigWeb,
};

export default function VerticalsGrid() {
  return (
    <section className="relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/30 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SplitTextReveal
          text={about.sigsHeading}
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {about.sigs.map((sig) => (
            <VerticalCard key={sig.id} vertical={{ ...sig, image: sigImages[sig.id] }} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
