import { FOOTER_STRINGS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/5 bg-black/60 px-6 pt-16 pb-6 text-gray-300 sm:px-10 md:px-20 lg:px-30">
      <div className="pointer-events-none absolute top-0 left-1/2 w-150 -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.08),rgba(157,132,242,0.04))] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-360">
        <div className="mb-2 flex flex-col justify-between gap-8 lg:flex-row">
          <div className="max-w-100">
            <div className="mb-2">
              <Image
                src="/g10.svg"
                width={200}
                height={41}
                alt="Chromezy logo"
              />
            </div>

            <p className="font-sora mb-4 text-left text-[12px] text-white/60">
              {FOOTER_STRINGS.DESCRIPTION}
            </p>

            <div className="mb-4 flex items-center gap-3 text-sm text-white/50">
              <Link href="#" className="transition-colors hover:text-white/80">
                {FOOTER_STRINGS.TERMS.TERMS}
              </Link>
              <span>|</span>
              <Link href="#" className="transition-colors hover:text-white/80">
                {FOOTER_STRINGS.TERMS.PRIVACY}
              </Link>
            </div>

            <div className="space-y-1">
              <div className="group flex items-center gap-1">
                <div className="group-hover:bg-background-primary/30 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                  <Image src="/phone.png" width={16} height={16} alt="phone" />
                </div>
                <span className="font-medium text-white">
                  {FOOTER_STRINGS.CONTACT_INFO.PHONE}
                </span>
              </div>

              <div className="group flex items-center gap-1">
                <div className="group-hover:bg-background-primary/30 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                  <Image src="/mail.png" width={16} height={16} alt="email" />
                </div>
                <span className="font-medium text-white">
                  {FOOTER_STRINGS.CONTACT_INFO.EMAIL}
                </span>
              </div>
            </div>
          </div>

          {/*Right side column */}
          <div className="grid grid-cols-1 gap-20 border-t border-white/10 md:grid-cols-2 md:border-t-0">
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col border-white/10 md:border-r">
                <Link
                  href="#"
                  className="hover:text-background-secondary font-medium text-white transition-colors"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.HOME}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.ABOUT_US}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.CARRER}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.CASE_STUDY}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background-secondary font-bold text-white transition-colors"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.TEAM}
                </Link>
              </li>
            </ul>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.AI}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.MVP}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.SAAS}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.ECOM}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background-primary hover:text-background-secondary font-bold transition-colors"
                >
                  {FOOTER_STRINGS.NAVIGATION_COLUMNS.WORK_WITH_US}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p className="font-sora text-center text-[12px] md:text-left">
            {FOOTER_STRINGS.COPYRIGHT_STRINGS.YEAR} |{" "}
            {FOOTER_STRINGS.COPYRIGHT_STRINGS.RIGHTS} |{" "}
            <span className="underline">
              {FOOTER_STRINGS.COPYRIGHT_STRINGS.OWNER}
            </span>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[12px] text-white/60">
              {FOOTER_STRINGS.CONNECT}
            </span>
            <div className="flex items-center gap-3">
              <Image src="/fb.png" width={24} height={24} alt="facebook" />
              <Image src="/insta.png" width={24} height={24} alt="instagram" />
              <Image
                src="/linkedin.png"
                width={24}
                height={24}
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
