import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

interface ProductServiceCardProps {
  svgSrc: string;
  heading: string;
  content: string;
  bgColor?: string;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ProductServiceCard: React.FC<ProductServiceCardProps> = ({
  svgSrc,
  heading,
  content,
  bgColor = "#3D00A0",
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        backgroundColor: bgColor,
        minHeight: "436px",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/0 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col p-5">
        <div className="mb-4 flex items-center justify-start">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
            Our Services
          </span>
        </div>
        <div className="absolute top-6 right-4 h-44.25 w-37.5 opacity-90">
          <Image
            src={svgSrc}
            alt={`${heading} service illustration`}
            fill
            className="object-contain"
          />
        </div>
        <div className="relative mt-20 flex flex-1 flex-col">
          <h3 className="mb-4 text-2xl leading-tight font-bold text-white">
            {heading}
          </h3>

          <p
            className={`mb-6 flex-1 text-sm leading-relaxed text-white/80 ${inter.variable} font-inter`}
          >
            {content}
          </p>
          <button
            className="group/btn flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black/80 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/50"
            aria-label={`Talk to a product expert about ${heading}`}
          >
            <span>Talk to a Product Expert</span>
            <Image
              src="/shapes/arrow.svg"
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
