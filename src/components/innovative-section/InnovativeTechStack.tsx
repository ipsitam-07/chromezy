"use client";
import InnovativeTechIcon from "./InnovativeTechIcon";
import { CATEGORIES } from "@/utils/constants";
import { motion } from "framer-motion";

function InnovativeTechStack() {
  return (
    <div className="m-h-[117px] w-full max-w-212.5 space-y-10 pt-20 text-white">
      {CATEGORIES.map((cat, index) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="flex gap-10 md:gap-10"
        >
          <span className="shrink-0 pt-1 text-5xl leading-none font-bold text-white/10 select-none">
            {cat.id}
          </span>

          <div className="flex flex-col gap-4">
            <h3 className="mt-1.5 text-left text-[20px] leading-tight font-semibold text-white">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-1">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex cursor-default items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:shadow-lg"
                >
                  <InnovativeTechIcon item={item} />
                  <span className="text-white/90 transition-colors group-hover:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default InnovativeTechStack;
