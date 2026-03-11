import { RefObject, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";

export interface ContactAnimationValues {
  // Cartoon character panel
  cartoonScale: MotionValue<number>;
  cartoonY: MotionValue<number>;
  cartoonOpacity: MotionValue<number>;

  // Form panel
  formY: MotionValue<number>;
  formOverflow: "hidden" | "visible";

  //Envelope icon
  envelopeY: MotionValue<number>;
  envelopeX: MotionValue<number>;
  envelopeScale: MotionValue<number>;
  envelopeOpacity: MotionValue<number>;
  blurFilter: MotionValue<string>;
}

export function useContactAnimations(
  sectionRef: RefObject<HTMLElement | null>
): ContactAnimationValues {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "center center"],
  });

  //Cartoon character
  const cartoonScale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const cartoonY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const cartoonOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  //Form panel
  const formY = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);

  const [formOverflow, setFormOverflow] = useState<"hidden" | "visible">(
    "visible"
  );

  useMotionValueEvent(scrollYProgress, "change", (pos) => {
    setFormOverflow(pos >= 0.37 ? "hidden" : "visible");
  });

  // Envelope icon
  const envelopeY = useTransform(
    scrollYProgress,
    [0.05, 0.33, 0.35],
    [-140, -60, 0]
  );

  const envelopeX = useTransform(scrollYProgress, [0.35, 0.37], [60, 60]);

  const envelopeScale = useTransform(scrollYProgress, [0.05, 0.24], [1, 0.8]);

  const envelopeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);

  const blur = useTransform(scrollYProgress, [0, 0.05, 0.33], [0, 0, 0.5]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return {
    cartoonScale,
    cartoonY,
    cartoonOpacity,
    formY,
    formOverflow,
    envelopeY,
    envelopeX,
    envelopeScale,
    envelopeOpacity,
    blurFilter,
  };
}
