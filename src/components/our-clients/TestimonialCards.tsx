import React from "react";
import Image from "next/image";
import { TestimonialCardsProps } from "@/components/interfaces/props";
import { TESTIMONIAL_LABELS } from "@/utils/constants";

const TestimonialCards: React.FC<TestimonialCardsProps> = ({
  feedback,
  name,
  designation,
  company,
  starRating,
  project,
  country,
  brandLogo,
}) => {
  return (
    <div className="h-112.5 w-[clamp(310px,47.15vw,400px)] rounded-[20px] bg-[#BDD5F4]/10 p-6 backdrop-blur-2xl transition-all duration-200 hover:bg-[#BDD5F4]/20">
      <div className="mb-4">
        <Image
          src="/quote.svg"
          alt="quote"
          width={20}
          height={18}
          className="opacity-100"
        />
      </div>

      <div className="mt-2.5 flex h-70.5 flex-col justify-between pb-6">
        <p
          className={`font-sora mb-6 min-h-48 text-left leading-relaxed font-bold text-white opacity-100 drop-shadow-white`}
        >
          {feedback}
        </p>

        <div className="w-full pb-6">
          <div className="flex items-end justify-between">
            <div className="mt-auto flex w-full flex-col items-end pb-3 text-right">
              <h4 className="text-sm font-bold tracking-wide text-white uppercase">
                {name}
              </h4>
              <p className="font-sora text-xs text-white/90">
                {designation}, {company}
              </p>
            </div>

            <div className="border-t border-white/20" />
          </div>
        </div>

        <div className="border-t border-white/20" />

        <div className="grid grid-cols-2 items-center gap-4 text-xs">
          <div className="flex flex-col justify-center py-4 text-left">
            <div className="text-[10px] font-normal whitespace-nowrap text-white/90">
              <p className="leading-5">
                {TESTIMONIAL_LABELS.STAR_RATING} – {starRating}
              </p>
              <p className="leading-5">
                {TESTIMONIAL_LABELS.PROJECT} – {project}
              </p>
              <p className="leading-5">
                {TESTIMONIAL_LABELS.COUNTRY} – {country}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="relative h-10 w-24">
              <Image
                src={brandLogo}
                alt={`${company} logo`}
                fill
                className="object-contain object-right opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
