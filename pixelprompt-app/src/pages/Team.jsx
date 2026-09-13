import OfficerGrid from "../components/team/OfficerGrid";
import FacultyMentorCards from "../components/team/FacultyMentorCards";

export default function Team() {
  return (
    <>
      <section className="px-6 pt-24 pb-8 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Our Team
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-text-muted)]">
          The students and faculty who run the chapter day-to-day.
        </p>
      </section>

      <OfficerGrid />
      <FacultyMentorCards />
    </>
  );
}
