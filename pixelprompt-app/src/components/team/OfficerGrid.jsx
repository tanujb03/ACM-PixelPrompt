import { team } from "../../data/mockData";
import PersonCard from "../shared/PersonCard";
import Reveal from "../shared/Reveal";

export default function OfficerGrid() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Officers
        </h2>

        <Reveal
          as="div"
          stagger={0.05}
          className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
        >
          {team.officers.map((officer) => (
            <PersonCard key={officer.id} photo={officer.photo} name={officer.name} role={officer.role} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
