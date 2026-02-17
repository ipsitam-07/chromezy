import Image from "next/image";
import { INNOVATIVE_STRINGS } from "@/utils/constants";

function InnvovativeTechWrap() {
  return (
    <div className="relative mx-auto mb-[60px] min-h-[859px] w-full max-w-[488px] overflow-hidden rounded-[80px]">
      <div className="absolute inset-0 border border-white/20 bg-gradient-to-b from-[#282E6C] from-0% from-100% to-[#BDD5F4] opacity-20 backdrop-blur-lg" />

      <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-[32px]">
        <div className="absolute top-[-10%] right-[-10%] h-[200px] w-[200px] bg-[radial-gradient(circle,rgba(67,128,255,0.3),rgba(17,222,255,0.1))] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[200px] w-[200px] bg-[radial-gradient(circle,rgba(157,132,242,0.3),rgba(67,128,255,0.1))] blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full min-h-[859px] flex-col justify-between px-[40px] pt-[120px]">
        <div>
          <h2 className="block w-full pr-[40px] text-left text-[clamp(32px,4vw,40px)] leading-12.5 font-semibold tracking-tighter text-white uppercase">
            {INNOVATIVE_STRINGS.HEADING}
          </h2>
          <p className="max-w-[600px] pt-[20px] text-left text-[clamp(14px,3vw,16px)] leading-[24px] font-normal tracking-wide text-[#ffffffcc]">
            {INNOVATIVE_STRINGS.DESCRIPTION}
          </p>
        </div>

        <div className="flex items-end justify-center">
          <div className="relative mt-[15px] mb-[56px] h-[376px] w-[376px]">
            <Image
              src="/shapes/blob.png"
              alt="Innovative Tech Blob"
              fill
              className="opw-[220px] h-auto object-contain opacity-70 sm:w-[280px] md:w-[376px]"
            />
          </div>
        </div>
      </div>

      <div className="from-background-primary/20 to-background-tertiary/20 absolute top-10 right-10 h-16 w-16 rounded-full bg-gradient-to-br blur-xl" />
      <div className="from-background-secondary/20 to-background-primary/20 absolute bottom-10 left-10 h-20 w-20 rounded-full bg-gradient-to-br blur-xl" />
    </div>
  );
}

export default InnvovativeTechWrap;
