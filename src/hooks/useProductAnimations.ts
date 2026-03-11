import { RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export interface ProductAnimationValues {
  yBall: MotionValue<number>;
  opacityBall: MotionValue<number>;
  scaleBall: MotionValue<number>;
  scaleBlur: MotionValue<string>;
  yContent: MotionValue<number>;
}

export function useProductAnimations(
  containerRef: RefObject<HTMLElement | null>
): ProductAnimationValues {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBall = useTransform(scrollYProgress, [0.3, 0.9], [100, -400]);
  const opacityBall = useTransform(scrollYProgress, [0.3, 0.55], [1, 1]);
  const scaleBall = useTransform(scrollYProgress, [0.3, 0.6], [1.8, 0.8]);
  const scaleBlur = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["blur(3px)", "blur(6px)"]
  );

  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return { yBall, opacityBall, scaleBall, scaleBlur, yContent };
}
