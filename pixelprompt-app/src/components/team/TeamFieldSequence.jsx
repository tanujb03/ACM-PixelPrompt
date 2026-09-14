import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import FieldPanel from "./FieldPanel";
import FacultyMentorCards from "./FacultyMentorCards";
import VerticalLabel from "./VerticalLabel";
import { coreTeam, coreFormation, seniorTeam, seniorFormation } from "../../data/teamRoster";

// Total pinned scroll distance (px) covering both hand-offs, split evenly
// between the two — tuned so each hand-off completes in roughly a single
// scroll gesture rather than a long scrubbed scroll.
const TRANSITION_SCROLL_PX = 400;

export default function TeamFieldSequence() {
  const sequenceRef = useRef(null);
  const stageRef = useRef(null);
  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const field1Api = useRef(null);
  const field2Api = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(panel1Ref.current, { autoAlpha: 1, yPercent: 0 });
      gsap.set(panel2Ref.current, { autoAlpha: 0, yPercent: 100 });

      // Two back-to-back segments of equal length: each panel slides
      // straight up and out as the next slides up into place from below —
      // motion follows the same vertical direction as the scroll driving
      // it, rather than swapping sideways. Scrub ties timeline position
      // directly to scroll, so pausing mid-scroll just pauses the
      // hand-off — no explicit "hold" segments needed.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sequenceRef.current,
          start: "top top",
          end: `+=${TRANSITION_SCROLL_PX}`,
          scrub: 0.6,
          pin: stageRef.current,
          anticipatePin: 1,
          // Fires exactly when the field locks into its pinned, fully
          // on-screen position — not a moment earlier, so the row pop-in
          // is the first thing the viewer sees once it lands, rather than
          // playing out (and finishing) while they're still scrolling
          // toward it.
          onEnter: () => field1Api.current?.playEntrance(),
        },
      });

      tl.to(panel1Ref.current, { yPercent: -100, autoAlpha: 0, duration: 1, ease: "power2.inOut" }, 0)
        .fromTo(
          panel2Ref.current,
          { yPercent: 100, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 1, ease: "power2.inOut" },
          0
        )
        .call(() => field2Api.current?.playEntrance(), null, 1)
        .to(stageRef.current, { y: "+=0", duration: 1 }, 1);
    }, sequenceRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <section
      ref={sequenceRef}
      className="relative"
      style={{ height: `calc(100dvh + ${TRANSITION_SCROLL_PX}px)` }}
    >
      <div ref={stageRef} className="relative w-full overflow-hidden bg-[var(--color-bg)]" style={{ height: "100dvh" }}>
        <div ref={panel1Ref} className="absolute inset-0">
          <FieldPanel
            ref={field1Api}
            label="Core Team"
            members={coreTeam}
            formation={coreFormation}
            theme="gold"
            cardSize="clamp(90px, 9vw, 170px)"
            rowGap={64}
            spreadFactor={0.7}
            nameFontSize="13px"
            roleFontSize="10px"
          />
        </div>

        <div ref={panel2Ref} className="absolute inset-0">
          <FieldPanel
            ref={field2Api}
            label="Senior Team"
            members={seniorTeam}
            formation={seniorFormation}
            theme="silver"
            cardSize="clamp(52px, 5.2vw, 92px)"
            rowGap={24}
            spreadFactor={0.88}
            nameFontSize="9px"
            roleFontSize="7px"
          />
        </div>
      </div>
    </section>

    {/* Normal scrolling flow after the pinned sequence finishes */}
    <div className="relative w-full bg-[var(--color-bg)] pt-12 pb-24">
      <VerticalLabel text="Faculty" />
      <div className="flex w-full items-start justify-center px-6 sm:px-12">
        <FacultyMentorCards />
      </div>
    </div>
    </>
  );
}
