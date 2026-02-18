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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="group flex max-h-[444px] w-full max-w-[420px] cursor-pointer flex-col rounded-[20px] bg-black/20 p-4 backdrop-blur-sm duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[8px]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 pt-6 pb-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-sora max-w-[85%] pt-[0px] text-left text-[16px] font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
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
