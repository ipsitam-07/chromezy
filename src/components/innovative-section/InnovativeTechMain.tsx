"use client";
import { useRef } from "react";
import InnvovativeTechWrap from "./InnovativeTechWrap";
import InnovativeTechStack from "./InnovativeTechStack";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function InnovateTechMain() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sphereY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [800, 100, 0, -200]
  );

  const sphereX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [-300, 0, 0, -300]
  );

  const sphereScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 2.5, 2.5, 1]
  );

  const sphereRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const sphereOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

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
        ref={containerRef}
        className="relative z-30 w-full px-6 py-25 md:px-10 lg:px-20"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.1),rgba(157,132,242,0.05))] blur-3xl" />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="w-full flex-shrink-0 lg:w-auto">
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
