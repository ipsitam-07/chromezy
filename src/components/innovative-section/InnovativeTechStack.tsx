import InnovativeTechIcon from "./InnovativeTechIcon";
import { CATEGORIES } from "@/utils/constants";

function InnovativeTechStack() {
  return (
    <div className="max-h-[117px] w-full max-w-[712px] space-y-[40px] pt-[100px] text-white">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="">
          <div className="flex items-center">
            <span className="h-[29px] w-[48px] text-[40px] leading-[0px] font-semibold text-white/10">
              {cat.id}
            </span>
            <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2 pl-[72px]">
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/20 hover:shadow-lg"
              >
                <InnovativeTechIcon item={item} />
                <span className="text-white/90 transition-colors group-hover:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InnovativeTechStack;
