// Aceternity UI "3D Card Effect" dropped in as a placeholder for our eventual
// centerpiece interaction — swap the copy/image once the concept locks.
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// PLACEHOLDER: generic Unsplash gradient — replace once PS locks.
const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80";

export default function FeatureCard3D() {
  return (
    <CardContainer className="w-full">
      <CardBody className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <CardItem
          translateZ="50"
          className="text-lg font-semibold text-[var(--color-text)]"
        >
          [Centerpiece Interaction Placeholder]
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-[var(--color-text-muted)]"
        >
          [Hover to tilt — this 3D card stands in for whatever centerpiece
          interaction fits the locked concept.]
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <img
            src={PLACEHOLDER_IMAGE}
            width={1200}
            height={800}
            className="h-48 w-full rounded-xl object-cover sm:h-56"
            alt="[Placeholder visual]"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
