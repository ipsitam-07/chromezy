"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HOME_STRINGS } from "@/utils/constants";
import { STATS_DATA } from "@/mock";
import { SectionProps, StatData } from "@/types";
import { useHeroAnimations } from "@/hooks/useHeroAnimation";

function HomeClient({ id }: SectionProps) {
  const {
    ballX,
    ballY,
    ballScale,
    ballOpacity,
    ballBlur,
    triangleY,
    triangleX,
    triangleScale,
    triangleFilter,
    triangleOpacity,
    textOpacity,
    yTransformHeader,
    yTransformSubheading,
    yTransformParagraph,
    yTransformStats,
    productEngineeringOpacity,
  } = useHeroAnimations();

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
          y: ballY,
          x: ballX,
          scale: ballScale,
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
              priority
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
            {STATS_DATA.map((stat: StatData, i: number) => (
              <Stat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div style={{ opacity: productEngineeringOpacity }} />
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
