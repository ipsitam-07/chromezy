"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FeaturedCardProps } from "@/components/interfaces/props";

interface FeatureCardPropsWithIndex extends FeaturedCardProps {
  index: number;
}

export default function FeaturedCard({
  imgSrc,
  title,
  description,
  index,
}: FeatureCardPropsWithIndex) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="group flex max-h-111 w-full max-w-105 cursor-pointer flex-col rounded-[20px] bg-black/20 p-4 backdrop-blur-2xl"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 pt-6 pb-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-sora max-w-[85%] text-left text-[16px] font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
            {title}
          </h3>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 transition-all duration-300">
            <Image
              src="/shapes/arrow.svg"
              alt="arrow"
              width={40}
              height={40}
              className="opacity-100"
            />
          </div>
        </div>
        <p className="text-left text-sm text-[#FFFFFF99]">{description}</p>
      </div>
    </motion.div>
  );
}
