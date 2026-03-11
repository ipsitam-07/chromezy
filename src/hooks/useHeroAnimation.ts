import { useLayoutEffect, useState } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export interface HeroAnimationValues {
  // Glass ball
  ballX: MotionValue<number>;
  ballY: MotionValue<number>;
  ballScale: MotionValue<number>;
  ballOpacity: MotionValue<number>;
  ballBlur: MotionValue<string>;

  // Cone
  triangleY: MotionValue<number>;
  triangleX: MotionValue<number>;
  triangleScale: MotionValue<number>;
  triangleFilter: MotionValue<string>;
  triangleOpacity: MotionValue<number>;

  // Hero text layers
  textOpacity: MotionValue<number>;
  yTransformHeader: MotionValue<number>;
  yTransformSubheading: MotionValue<number>;
  yTransformParagraph: MotionValue<number>;
  yTransformStats: MotionValue<number>;

  // Section transition
  productEngineeringOpacity: MotionValue<number>;
}

export function useHeroAnimations(): HeroAnimationValues {
  const { scrollY } = useScroll();

  const [viewportHeight, setViewportHeight] = useState(1000);

  useLayoutEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const vh = viewportHeight;

  //Glass ball
  const ballX = useTransform(
    scrollY,
    [0, vh, vh * 4, vh * 5, vh * 6, vh * 6 + vh / 4, vh * 7],
    [570, 420, 417, 145, 100, -100, -100]
  );

  const ballY = useTransform(
    scrollY,
    [0, vh, vh * 1.25, vh * 2, vh * 3, vh * 4, vh * 5.25, vh * 6],
    [100, 215, 215, -85, 115, 135, 250, 40]
  );

  const ballScale = useTransform(
    scrollY,
    [
      vh,
      vh + vh / 4,
      vh * 2,
      vh * 3,
      vh * 4,
      vh * 5,
      vh * 6,
      vh * 6 + vh / 4,
      vh * 7,
    ],
    [1, 2, 1, 1.9, 2, 1.3, 1, 0.5, 0.5]
  );

  const ballOpacity = useTransform(
    scrollY,
    [vh * 3, vh * 3 + vh / 2, vh * 5, vh * 6, vh * 7],
    [1, 0.15, 1, 1, 0]
  );

  const ballBlur = useTransform(
    scrollY,
    [vh + vh / 4, vh * 2],
    ["blur(0px)", "blur(10px)"]
  );

  //Cone
  const triangleY = useTransform(
    scrollY,
    [0, vh, vh + vh / 4, vh * 2],
    [70, 70 - 100, 70 - 100, 100]
  );

  const triangleX = useTransform(
    scrollY,
    [0, vh, vh * 2, vh * 4],
    [-800, -800 + 50, -650, -850]
  );

  const triangleScale = useTransform(
    scrollY,
    [0, vh, vh + vh / 4, vh * 2, vh * 3],
    [1, 0.5, 0.24, 0.7, 1]
  );

  const triangleFilter = useTransform(
    scrollY,
    [0, vh, vh + vh / 4, vh * 2],
    ["blur(10px)", "blur(20px)", "blur(20px)", "blur(10px)"]
  );

  const triangleOpacity = useTransform(
    scrollY,
    [vh * 3, vh * 3 + vh / 1],
    [1, 0]
  );

  //Hero text layers

  const textOpacity = useTransform(scrollY, [0, vh * 1.5], [1, 0]);

  const yTransformHeader = useTransform(scrollY, [0, vh], [0, -100]);
  const yTransformSubheading = useTransform(scrollY, [0, vh], [0, -150]);
  const yTransformParagraph = useTransform(scrollY, [0, vh], [0, -200]);
  const yTransformStats = useTransform(scrollY, [0, vh], [0, -250]);

  //Section transition

  const productEngineeringOpacity = useTransform(
    scrollY,
    [vh / 2, vh, vh + 1],
    [0, 1, 1]
  );

  return {
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
  };
}
