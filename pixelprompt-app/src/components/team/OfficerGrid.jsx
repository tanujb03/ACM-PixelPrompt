import { team } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";
import SplitTextReveal from "../shared/SplitTextReveal";

export default function OfficerGrid() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SplitTextReveal
          text="Chapter Officers"
          as="h2"
          className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <Reveal
          as="div"
          stagger={0.06}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {team.officers.map((officer) => (
            <PersonCard key={officer.id} person={officer} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
