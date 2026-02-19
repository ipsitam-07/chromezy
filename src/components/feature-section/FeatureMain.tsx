import { FEATURE_STRINGS } from "@/utils/constants";
import FeaturedCard from "./FeatureCard";
import { INSIGHTS } from "@/utils/constants";
import { SectionProps } from "../interfaces/props";

function FeatureMain({ id }: SectionProps) {
  return (
    <section
      className="relative z-30 mb-32 w-full px-6 md:px-10 lg:px-20"
      id={id}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.12),rgba(157,132,242,0.08))] blur-3xl" />

      <div className="relative z-10 mb-12 max-w-175">
        <h2 className="block w-full text-left text-[clamp(32px,4vw,40px)] font-semibold tracking-tighter text-white uppercase">
          {FEATURE_STRINGS.HEADING}
        </h2>
        <p className="max-w-150 text-[clamp(14px,3vw,16px)] font-normal tracking-wide text-[#ffffffcc]">
          {FEATURE_STRINGS.DESCRIPTION}
        </p>
      </div>

      <div className="relative z-10 grid max-w-350 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {INSIGHTS.map((insight, index) => (
          <div key={insight.key} className="flex justify-center">
            <FeaturedCard
              imgSrc={insight.imgSrc}
              title={insight.heading}
              description={insight.text}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureMain;
