import InnovativeTechIcon from "./InnovativeTechIcon";
import { CATEGORIES } from "@/utils/constants";

function InnovativeTechStack() {
  return (
    <div className="m-h-[117px] w-full max-w-[850px] space-y-10 pt-20 text-white">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="flex gap-[40px] md:gap-10">
          <span className="shrink-0 pt-1 text-5xl leading-none font-bold text-white/10 select-none">
            {cat.id}
          </span>

          <div className="flex flex-col gap-4">
            <h3 className="mt-[6px] text-left text-[20px] leading-tight font-semibold text-white">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-[4px]">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex cursor-default items-center gap-2 rounded-[8px] bg-white/10 px-4 py-[8px] text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:shadow-lg"
                >
                  <InnovativeTechIcon item={item} />
                  <span className="text-white/90 transition-colors group-hover:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InnovativeTechStack;
