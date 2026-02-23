"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HOME_STRINGS, STATS_DATA } from "@/utils/constants";
import { SectionProps } from "./interfaces/props";

function HomeClient({ id }: SectionProps) {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(1000);

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Ball animation
  const x = useTransform(
    scrollY,
    [
      0,
      viewportHeight,
      viewportHeight * 4,
      viewportHeight * 5,
      viewportHeight * 6,
      viewportHeight * 6 + viewportHeight / 4,
      viewportHeight * 7,
    ],
    [570, 420, 417, 145, 100, -100, -100]
  );

  const y = useTransform(
    scrollY,
    [
      0,
      viewportHeight,
      viewportHeight * 1.25,
      viewportHeight * 2,
      viewportHeight * 3,
      viewportHeight * 4,
      viewportHeight * 5.25,
      viewportHeight * 6,
    ],
    [100, 215, 215, -85, 115, 135, 250, 40]
  );

  const scale = useTransform(
    scrollY,
    [
      viewportHeight,
      viewportHeight + viewportHeight / 4,
      viewportHeight * 2,
      viewportHeight * 3,
      viewportHeight * 4,
      viewportHeight * 5,
      viewportHeight * 6,
      viewportHeight * 6 + viewportHeight / 4,
      viewportHeight * 7,
    ],
    [1, 2, 1, 1.9, 2, 1.3, 1, 0.5, 0.5]
  );

  const ballOpacity = useTransform(
    scrollY,
    [
      viewportHeight * 3,
      viewportHeight * 3 + viewportHeight / 2,
      viewportHeight * 5,
      viewportHeight * 6,
      viewportHeight * 7,
    ],
    [1, 0.15, 1, 1, 0]
  );

  const ballBlur = useTransform(
    scrollY,
    [viewportHeight + viewportHeight / 4, viewportHeight * 2],
    ["blur(0px)", "blur(10px)"]
  );

  const textOpacity = useTransform(scrollY, [0, viewportHeight * 1.5], [1, 0]);

  const yTransformHeader = useTransform(
    scrollY,
    [0, viewportHeight],
    [0, -100]
  );

  const yTransformSubheading = useTransform(
    scrollY,
    [0, viewportHeight],
    [0, -150]
  );

  const yTransformParagraph = useTransform(
    scrollY,
    [0, viewportHeight],
    [0, -200]
  );

  const yTransformStats = useTransform(scrollY, [0, viewportHeight], [0, -250]);

  //traingle animation
  const triangleY = useTransform(
    scrollY,
    [
      0,
      viewportHeight,
      viewportHeight + viewportHeight / 4,
      viewportHeight * 2,
    ],
    [70, 70 - 100, 70 - 100, 100]
  );

  const triangleX = useTransform(
    scrollY,
    [0, viewportHeight, viewportHeight * 2, viewportHeight * 4],
    [-800, -800 + 50, -650, -850]
  );

  const triangleScale = useTransform(
    scrollY,
    [
      0,
      viewportHeight,
      viewportHeight + viewportHeight / 4,
      viewportHeight * 2,
      viewportHeight * 3,
    ],
    [1, 0.5, 0.24, 0.7, 1]
  );

  const triangleFilter = useTransform(
    scrollY,
    [
      0,
      viewportHeight,
      viewportHeight + viewportHeight / 4,
      viewportHeight * 2,
    ],
    ["blur(10px)", "blur(20px)", "blur(20px)", "blur(10px)"]
  );

  const triangleOpacity = useTransform(
    scrollY,
    [viewportHeight * 3, viewportHeight * 3 + viewportHeight / 1],
    [1, 0]
  );

  const productEngineeringOpacity = useTransform(
    scrollY,
    [viewportHeight / 2, viewportHeight, viewportHeight + 1],
    [0, 1, 1]
  );

  return (
    <>
      <motion.div
        className="fixed z-0 mix-blend-screen"
        style={{
          y: triangleY,
          scale: triangleScale,
          filter: triangleFilter,
          opacity: triangleOpacity,
          top: 0,
          x: triangleX,
        }}
      >
        <Image
          src="/shapes/cone.png"
          alt="glass pyramid"
          width={600}
          height={600}
          priority
        />
      </motion.div>

      <motion.div
        className="fixed"
        style={{
          y,
          x,
          scale,
          filter: ballBlur,
          opacity: ballOpacity,
          top: 0,
        }}
      >
        <Image
          src="/shapes/MainBall.svg"
          alt="glass bubble"
          width={300}
          height={300}
          priority
        />
      </motion.div>

      <div className="z-20 flex flex-col items-center" id={id}>
        <motion.div style={{ y: yTransformHeader, opacity: textOpacity }}>
          <div className="flex h-14 items-center justify-center gap-2.5 py-4">
            <Image
              src="/shapes/magic.webp"
              alt="magic wand"
              width={16}
              height={16}
            />
            <p className="font-inter text-text-hero font-medium">
              {HOME_STRINGS.HERO_BADGE}
            </p>
          </div>
          <h1 className="text-[64px] leading-snug font-semibold md:text-[64px]">
            {HOME_STRINGS.TITLE_PART_1}{" "}
            <span className="bg-background-secondary bg-clip-text text-transparent">
              {HOME_STRINGS.CONCEPT}
            </span>
            <br />
            {HOME_STRINGS.TITLE_PART_2}{" "}
            <span className="bg-background-primary bg-clip-text text-transparent">
              {HOME_STRINGS.REALITY}
            </span>
          </h1>
        </motion.div>

        <motion.div style={{ y: yTransformSubheading, opacity: textOpacity }}>
          <p className="text-text-accent mt-1 text-[24px]">
            {HOME_STRINGS.SUBHEADING}
          </p>
        </motion.div>

        <motion.div style={{ y: yTransformParagraph, opacity: textOpacity }}>
          <p className="mt-6 max-w-3xl text-gray-300">
            {HOME_STRINGS.DESCRIPTION}
          </p>
        </motion.div>

        <motion.div style={{ y: yTransformStats, opacity: textOpacity }}>
          <div className="mt-18 mb-4 grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS_DATA.map((stat, i) => (
              <Stat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div style={{ opacity: productEngineeringOpacity }}></motion.div>
      </div>
    </>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="from-background-primary to-background-tertiary bg-linear-to-r bg-clip-text text-[32px] font-bold text-transparent">
        {value}
      </p>
      <span className="text-[14px] text-gray-300">{label}</span>
    </div>
  );
};

export default HomeClient;
