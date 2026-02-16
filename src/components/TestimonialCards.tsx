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
      <div>
        <div className="mt-2.5 flex h-[282px] flex-col justify-between pb-6">
          <p
            className={`mb-6 leading-relaxed text-white/80 ${inter.variable} font-inter min-h-[192px] font-medium`}
          >
            {feedback}
          </p>
          <div className="h-[42px] w-full space-y-1 pb-6 text-end">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">
                {name}
              </h4>
              <p className="text-xs text-[#ffffff99]">
                {designation}, {company}
              </p>
            </div>
          </div>
          <div className="border-t border-white/10" />

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="mt-6 flex h-[54px] items-center justify-between">
              <div className="text-[10px] font-normal text-[#ffffff99]">
                <p className="leading-[18px]">Star Rating -{starRating}</p>

                <p className="leading-[18px]">Project -{project}</p>

                <p className="leading-[18px]">Country -{country}</p>
              </div>
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
    </div>
  );
};

export default TestimonialCards;
