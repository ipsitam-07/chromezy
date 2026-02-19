"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./ProductServiceCard";
import { LAYOUT_CONSTANTS, SERVICE_CARD_CONTENT } from "@/utils/constants";
import { SectionProps } from "../interfaces/props";

function ProductEngineering({ id }: SectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBall = useTransform(scrollYProgress, [0.3, 0.9], [100, -400]);

  const opacityBall = useTransform(scrollYProgress, [0.3, 0.55], [1, 1]);

  const scaleBall = useTransform(scrollYProgress, [0.3, 0.6], [1.8, 1]);

  const scaleBlur = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["blur(3px)", "blur(6px)"]
  );
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className={`font-sora relative z-30 mt-32 w-full px-6 antialiased md:px-10 lg:px-20`}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.15),rgba(157,132,242,0.1))] blur-3xl" />

      <motion.div
        style={{
          y: yBall,
          opacity: opacityBall,
          scale: scaleBall,
          filter: scaleBlur,
        }}
        className="pointer-events-none absolute top-0 right-40 z-40 hidden mix-blend-screen md:block"
      >
        <Image
          src="/shapes/MainBall.svg"
          alt="Decorative Ball"
          width={350}
          height={350}
          priority
        />
      </motion.div>

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 flex flex-col gap-2"
      >
        <h2 className="block w-full text-left text-[clamp(32px,4vw,40px)] font-semibold tracking-tighter text-white uppercase">
          {LAYOUT_CONSTANTS.SECTION_TITLE}
        </h2>

        <p className="max-w-180 text-left text-[clamp(14px,3vw,16px)] leading-relaxed font-light tracking-wide text-[#ffffffcc]">
          {LAYOUT_CONSTANTS.SECTION_DESCRIPTION}
        </p>
      </motion.div>

      <div className="relative z-10 mt-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICE_CARD_CONTENT.map((card) => (
          <ServiceCard
            key={card.key}
            svgSrc={card.svgSrc}
            heading={card.heading}
            content={card.content}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductEngineering;
