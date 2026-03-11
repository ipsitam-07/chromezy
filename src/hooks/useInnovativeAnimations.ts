import { RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export interface InnovativeAnimationValues {
  sphereY: MotionValue<number>;
  sphereX: MotionValue<number>;
  sphereScale: MotionValue<number>;
  sphereRotate: MotionValue<number>;
  sphereOpacity: MotionValue<number>;
}

export function useInnovativeAnimations(
  containerRef: RefObject<HTMLElement | null>
): InnovativeAnimationValues {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Decorative sphere

  const sphereY = useTransform(scrollYProgress, [0.5, 1], [800, -200]);
  const sphereX = useTransform(scrollYProgress, [0.5, 1], [0, -300]);
  const sphereScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 2.5, 2, 1]
  );
  const sphereRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const sphereOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return { sphereY, sphereX, sphereScale, sphereRotate, sphereOpacity };
}
