import Hero from "../components/home/Hero";
import FeatureBlock from "../components/home/FeatureBlock";
import FeatureCard3D from "../components/home/FeatureCard3D";
import StatsStrip from "../components/home/StatsStrip";
import FinalCta from "../components/home/FinalCta";
import { features } from "../data/mockData";

// PLACEHOLDER: generic Unsplash gradient — replace once PS locks.
const FEATURE_ONE_IMAGE =
  "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=1200&q=80";

// Per-feature visual overrides, matched by array position — index 0 gets a
// plain placeholder photo, index 1 gets the Aceternity 3D card centerpiece.
// Falls back to FeatureBlock's default empty box for anything beyond that.
const visuals = [
  <img
    key="feature-visual-0"
    src={FEATURE_ONE_IMAGE}
    width={1200}
    height={675}
    className="aspect-video w-full rounded-2xl object-cover"
    alt="[Placeholder visual]"
  />,
  <FeatureCard3D key="feature-visual-1" />,
];

export default function Home() {
  return (
    <>
      <Hero />
      {features.map((feature, i) => (
        <FeatureBlock
          key={feature.id}
          feature={feature}
          reverse={i % 2 === 1}
          visual={visuals[i]}
        />
      ))}
      <StatsStrip />
      <FinalCta />
    </>
  );
}
