import Image from "next/image";
import React from "react";
import { ProductServiceCardProps } from "@/components/interfaces/props";
import { SERVICE_CARD_UI } from "@/utils/constants";

const ProductServiceCard: React.FC<ProductServiceCardProps> = ({
  svgSrc,
  heading,
  content,
  bgColor = SERVICE_CARD_UI.DEFAULT_BG_COLOR,
}) => {
  return (
    <div
      className="group max-h-109-w-[308px] relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        backgroundColor: bgColor,
        minHeight: SERVICE_CARD_UI.MIN_HEIGHT,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/0 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col p-5">
        <div className="mb-4 flex items-center justify-start">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
            {SERVICE_CARD_UI.LABELS.BADGE}
          </span>
        </div>
        <div className="absolute top-6 right-1 h-44.25 w-37.5 opacity-90">
          <Image
            src={svgSrc}
            alt={`${heading} service illustration`}
            fill
            className="h-37.25 w-38.25 object-contain"
          />
        </div>
        <div className="relative mt-14 flex flex-1 flex-col">
          <h3 className="mb-4 text-left text-2xl font-bold text-white">
            {heading}
          </h3>

          <p
            className={`font-inter flex-1 text-left text-[14px] leading-5 text-white/80`}
          >
            {content}
          </p>
          <button
            className="group/btn flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/50"
            aria-label={`Talk to a product expert about ${heading}`}
          >
            <span className="font-inter">{SERVICE_CARD_UI.LABELS.BUTTON}</span>
            <Image
              src={SERVICE_CARD_UI.PATHS.ARROW_ICON}
              width={20}
              height={20}
              alt="arrow"
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductServiceCard;
