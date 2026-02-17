"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCards";
import { TESTIMONIALS, CLIENT_SECTION_STRINGS } from "@/utils/constants";

function HappyClients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xTranslate = useTransform(scrollYProgress, [0.1, 1], [0, -1200]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Server-side static hydration, animation will be client side
  if (!hasMounted) {
    return (
      <section className="relative z-30 mt-32 w-full overflow-hidden px-6 opacity-0 md:px-10 lg:px-20">
        <div ref={sectionRef} />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative z-30 mt-32 w-full overflow-hidden px-6 md:px-10 lg:px-20"
    >
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <h2 className="block w-full text-left text-[clamp(32px,4vw,40px)] font-semibold tracking-tighter text-white uppercase">
            {CLIENT_SECTION_STRINGS.TITLE}
          </h2>

          <p className="max-w-[600px] text-[clamp(14px,3vw,18px)] font-normal tracking-wide text-[#ffffffcc]">
            {CLIENT_SECTION_STRINGS.DESCRIPTION}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 max-sm:hidden md:mt-0">
          <button
            className="nextBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C] transition-colors hover:bg-[#50525C]"
            aria-label="Previous testimonial"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-[18px] w-[18px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="m328 112-144 144 144 144"
              />
            </svg>
          </button>
          <button
            className="prevBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C] transition-colors hover:bg-[#50525C]"
            aria-label="Next testimonial"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-[18px] w-[18px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="m268 112 144 144-144 144"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative z-10">
        <motion.div
          style={{ x: xTranslate, opacity }}
          className="flex gap-6 pb-10"
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.key} className="flex-shrink-0">
              <TestimonialCard
                feedback={t.feedback}
                name={t.name}
                designation={t.designation}
                company={t.company}
                starRating={t.starRating}
                project={t.project}
                country={t.country}
                brandLogo={t.brandLogo}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HappyClients;
