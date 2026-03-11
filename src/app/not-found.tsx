import Link from "next/link";
import type { Metadata } from "next";
import { NOT_FOUND_PAGE } from "@/utils/constants";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="bg-brand-dark flex min-h-screen flex-col items-center justify-center text-white">
      <p className="text-brand-primary mb-2 text-sm font-medium tracking-widest uppercase">
        {NOT_FOUND_PAGE.STATUS_CODE}
      </p>
      <h1 className="mb-4 text-[clamp(32px,4vw,48px)] font-bold tracking-tighter">
        {NOT_FOUND_PAGE.NOT_FOUND}
      </h1>
      <p className="mb-8 max-w-md text-center text-white/60">
        {NOT_FOUND_PAGE.DOES_NOT_EXIST}
      </p>
      <Link
        href="/"
        className="bg-brand-primary hover:bg-brand-primary/80 cursor-pointer rounded-full px-8 py-3 text-sm font-medium text-white transition-all"
      >
        {NOT_FOUND_PAGE.BACK_TO_HOME}
      </Link>
    </div>
  );
}
