"use client";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCards";
import { TESTIMONIALS, CLIENT_SECTION_STRINGS } from "@/utils/constants";
import { SectionProps } from "../interfaces/props";

function OurClients({ id }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasMounted(true);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const entryX = useTransform(scrollYProgress, [0.1, 0.4], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      const startScroll = 0.75;
      const endScroll = 1.0;

      let progress = 0;
      if (latest > startScroll) {
        progress = (latest - startScroll) / (endScroll - startScroll);
      }
      if (progress > 1) progress = 1;

      if (maxScroll > 0) {
        container.scrollLeft = progress * maxScroll;
      }
    }
  });
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  if (!hasMounted) {
    return (
      <section className="relative z-30 mt-32 w-full px-6 opacity-0 md:px-10 lg:px-20">
        <div ref={sectionRef} />
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative z-30 mt-32 w-full px-6 md:px-10 lg:px-20"
    >
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <h2 className="block w-full text-left text-[clamp(32px,4vw,40px)] font-semibold tracking-tighter text-white uppercase">
            {CLIENT_SECTION_STRINGS.TITLE}
          </h2>

          <p className="max-w-150 text-[clamp(14px,3vw,16px)] font-normal tracking-wide text-[#ffffffcc]">
            {CLIENT_SECTION_STRINGS.DESCRIPTION}
          </p>
        </div>

        <div className="relative z-50 mt-6 flex items-center gap-2 max-sm:hidden md:mt-0">
          <button
            onClick={() => scroll("left")}
            className="nextBtn m-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-[#40424C] transition-colors hover:bg-[#50525C] active:scale-95"
            aria-label="Previous testimonial"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-4.5 w-4.5 text-white"
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
            onClick={() => scroll("right")}
            className="prevBtn m-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-[#40424C] transition-colors hover:bg-[#50525C] active:scale-95"
            aria-label="Next testimonial"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-4.5 w-4.5 text-white"
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

      <div className="relative z-10 w-full">
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-10"
          style={{ scrollBehavior: "auto" }}
        >
          <motion.div
            style={{ x: entryX, opacity }}
            className="flex w-max gap-6"
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.key} className="shrink-0">
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
      </div>
    </section>
  );
}

export default OurClients;
