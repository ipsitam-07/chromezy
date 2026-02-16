import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

interface TestimonialCardsProps {
  feedback: string;
  name: string;
  designation: string;
  company: string;
  starRating: string;
  project: string;
  country: string;
  brandLogo: string;
}

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
    <div className="h-112.5 w-[clamp(310px,47.15vw,400px)] rounded-[20px] bg-[#bdd5f40d] p-6 backdrop-blur-2xl transition-all duration-200 hover:bg-[#bdd5f433]">
      <div className="mb-4">
        <Image
          src="/quote.svg"
          alt="quote"
          width={20}
          height={18}
          className="opacity-100"
        />
      </div>
      <p
        className={`mb-6 text-sm leading-relaxed text-white/80 ${inter.variable} font-inter min-h-30`}
      >
        {feedback}
      </p>
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white">
            {name}
          </h4>
          <p className="mt-1 text-xs text-white/60">
            {designation}, {company}
          </p>
        </div>
        <div className="border-t border-white/10" />

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="mb-1 text-white/40">Star Rating</p>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="font-medium text-white/90">{starRating}</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-white/40">Project</p>
            <p className="text-white/90">{project}</p>
          </div>
          <div>
            <p className="mb-1 text-white/40">Country</p>
            <p className="text-white/90">{country}</p>
          </div>
          <div className="flex items-end justify-end">
            <div className="relative h-10 w-20">
              <Image
                src={brandLogo}
                alt={`${company} logo`}
                fill
                className="object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
