import Image from "next/image";
import { STORIES, SUCCESS_STRING } from "@/utils/constants";
import { SectionProps } from "./interfaces/props";

function SuccessStories({ id }: SectionProps) {
  return (
    <div
      id={id}
      className="relative z-30 mt-32 w-full px-6 py-10 md:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.12),rgba(157,132,242,0.08))] blur-3xl" />

      <div className="relative z-10 mb-6 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-center gap-2">
          <h2 className="block w-full pr-40 text-left text-[clamp(32px,4vw,40px)] leading-13 font-semibold tracking-tighter text-white uppercase">
            {SUCCESS_STRING.HEADING}
          </h2>
          <p className="max-w-150 text-left text-[clamp(14px,3vw,16px)] font-normal tracking-wide text-[#ffffffcc]">
            {SUCCESS_STRING.DESCRIPTION}
          </p>
        </div>

        {STORIES.slice(0, 2).map((story) => (
          <div
            key={story.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl"
          >
            <div className="relative h-75 overflow-hidden md:h-80">
              <Image
                src={story.image}
                fill
                alt={story.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="mb-2 inline-block w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {story.label}
              </span>
              <h3 className="mb-1 text-2xl font-bold text-white">
                {story.title}
              </h3>
              <p className="text-sm text-white/80">{story.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {STORIES.slice(2).map((story) => (
          <div
            key={story.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl"
          >
            <div className="relative h-75 overflow-hidden md:h-80">
              <Image
                src={story.image}
                fill
                alt={story.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="mb-2 inline-block w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {story.label}
              </span>
              <h3 className="mb-1 text-2xl font-bold text-white">
                {story.title}
              </h3>
              <p className="text-sm text-white/80">{story.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
