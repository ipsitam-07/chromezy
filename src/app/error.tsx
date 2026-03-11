"use client";
import { ErrorPageProps } from "@/types";
import { ERROR_PAGE } from "@/utils/constants";

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="bg-brand-dark flex min-h-screen flex-col items-center justify-center text-white">
      <h1 className="mb-4 text-[clamp(32px,4vw,48px)] font-bold tracking-tighter">
        {ERROR_PAGE.SOMETHING_WENT_WRONG}
      </h1>
      <p className="mb-8 max-w-md text-center text-white/60">
        {ERROR_PAGE.ERROR_OCCURRED}
      </p>
      <button
        onClick={reset}
        className="bg-brand-primary hover:bg-brand-primary/80 cursor-pointer rounded-full px-8 py-3 text-sm font-medium text-white transition-all"
      >
        {ERROR_PAGE.TRY_AGAIN}
      </button>
    </div>
  );
}
