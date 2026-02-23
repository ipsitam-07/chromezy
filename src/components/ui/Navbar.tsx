"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAVBAR_LABELS, navItems } from "@/utils/constants";

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );
    navItems.forEach((item) => {
      if (item.target && item.id !== "home") {
        const section = document.getElementById(item.target);
        if (section) observer.observe(section);
      }
    });

    const handleTopScroll = () => {
      if (window.scrollY < 50) setActiveSection("home");
    };
    window.addEventListener("scroll", handleTopScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);

  return (
    <>
      <nav className="bg-navbar-background fixed top-0 z-50 hidden h-16 w-full border-b border-white/5 backdrop-blur-sm lg:flex">
        <div className="mx-auto flex w-full max-w-350 items-center justify-between px-10 pt-3 pb-2">
          <div className="flex items-center gap-6">
            <Link href="/" className="shrink-0">
              <Image
                src="/g10.svg"
                alt="Chromezy logo"
                width={140}
                height={29}
                priority
              />
            </Link>
            <div className="relative hidden xl:block">
              <Image
                src="/search.svg"
                alt="search"
                width={16}
                height={16}
                className="absolute top-1/2 left-3 -translate-y-1/2 opacity-100"
                priority
              />
              <input
                type="text"
                placeholder="Search"
                className="rounded-lg py-2 pr-4 pl-10 text-[14px] placeholder:text-white/60 focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <ul className="absolute left-1/2 flex w-130 -translate-x-1/2 transform items-center justify-center gap-8 border-b border-white/10 pb-2">
            {navItems.map((eachItem) => {
              const isHome = eachItem.id === "home";
              const active =
                activeSection === (isHome ? "home" : eachItem.target);

              return (
                <li key={eachItem.id} className="relative">
                  {isHome ? (
                    <a
                      href="#hero"
                      className={`text-xs font-medium transition-colors hover:text-white ${
                        active ? "text-white" : "text-white"
                      }`}
                    >
                      {eachItem.label}
                    </a>
                  ) : (
                    <a
                      href={`#${eachItem.target}`}
                      className={`text-xs font-medium transition-colors ${
                        active ? "text-white" : "text-white hover:text-white"
                      }`}
                    >
                      {eachItem.label}
                    </a>
                  )}

                  {active && (
                    <span className="from-background-primary to-background-secondary absolute -bottom-[9.5px] left-0 h-0.5 w-full bg-linear-to-r transition-all duration-300" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="#about"
              className="px-5 py-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              {NAVBAR_LABELS.ABOUT_US}
            </Link>
            <Link
              href="#contact"
              className="from-background-primary to-background-primary/90 hover:shadow-background-primary/30 rounded-full bg-linear-to-r px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg"
            >
              {NAVBAR_LABELS.CONTACT_US}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
