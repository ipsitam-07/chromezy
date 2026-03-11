"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionProps } from "@/types";
import { useInnovativeAnimations } from "@/hooks/useInnovativeAnimations";
import InnvovativeTechWrap from "./InnovativeTechWrap";
import { INNOVATIVE_STRINGS } from "@/utils/constants";

const InnovativeTechStack = dynamic(() => import("./InnovativeTechStack"), {
  ssr: false,
  loading: () => (
    <div className="w-full pt-20 text-white/20">
      {INNOVATIVE_STRINGS.LOADING}
    </div>
  ),
});

function InnovateTechMain({ id }: SectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { sphereY, sphereX, sphereScale, sphereRotate, sphereOpacity } =
    useInnovativeAnimations(containerRef);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-5"
        style={{
          y: sphereY,
          x: sphereX,
          scale: sphereScale,
          rotate: sphereRotate,
          opacity: sphereOpacity,
          top: 0,
          left: 0,
        }}
      >
        <Image
          src="/shapes/sphere.png"
          alt="decorative sphere"
          width={300}
          height={300}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <div
        id={id}
        ref={containerRef}
        className="relative z-30 w-full px-6 py-25 md:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.1),rgba(157,132,242,0.05))] blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-350 flex-col items-start justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="w-full shrink-0 lg:sticky lg:top-24 lg:h-fit lg:w-auto">
            <InnvovativeTechWrap />
          </div>
          <div className="w-full lg:flex-1">
            <InnovativeTechStack />
          </div>
        </div>
      </div>
    </>
  );
}

export default InnovateTechMain;
