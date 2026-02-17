import ServiceCard from "./ProductServiceCard";
import { LAYOUT_CONSTANTS, SERVICE_CARD_CONTENT } from "@/utils/constants";

function ProductEngineering() {
  return (
    <div
      className={`font-sora relative z-30 mt-32 w-full px-6 antialiased md:px-10 lg:px-20`}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.15),rgba(157,132,242,0.1))] blur-3xl" />

      <div className="flex flex-col gap-2">
        <h2 className="block w-full text-left text-[clamp(32px,4vw,40px)] font-semibold tracking-tighter text-white uppercase">
          {LAYOUT_CONSTANTS.SECTION_TITLE}
        </h2>

        <p className="max-w-[720px] text-left text-[clamp(14px,3vw,16px)] leading-relaxed font-light tracking-wide text-[#ffffffcc]">
          {LAYOUT_CONSTANTS.SECTION_DESCRIPTION}
        </p>
      </div>

      <div className="relative z-10 mt-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICE_CARD_CONTENT.map((card) => (
          <ServiceCard
            key={card.key}
            svgSrc={card.svgSrc}
            heading={card.heading}
            content={card.content}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductEngineering;
