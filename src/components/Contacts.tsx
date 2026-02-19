"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { CONTACT_US_STRINGS } from "@/utils/constants";

function ContactScreen() {
  const sectionRef = useRef(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const cartoonScale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  const cartoonY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const cartoonOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const formY = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const formOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  //envelope icon

  const envelopeY = useTransform(
    scrollYProgress,
    [0.05, 0.35, 0.33],
    [-140, -40, 0]
  );

  const envelopeX = useTransform(scrollYProgress, [0.35, 0.37], [60, 60]);

  const envelopeScale = useTransform(scrollYProgress, [0.05, 0.24], [1, 0.8]);

  const envelopeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.5]);

  const blur = useTransform(scrollYProgress, [0, 0.05, 0.33], [0, 0, 0.5]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  const formOverflow = useTransform(scrollYProgress, (pos) =>
    pos >= 0.37 ? "hidden" : "visible"
  );

  return (
    <div
      ref={sectionRef}
      className="relative z-30 mt-10 mb-40 w-full px-6 md:px-10 lg:px-20"
    >
      <div className="relative mx-auto min-h-[760px] w-full max-w-[1320px] rounded-[40px] shadow-2xl lg:rounded-[80px]">
        <div className="absolute inset-0 z-0 flex flex-col overflow-hidden rounded-[40px] bg-[#AACFFE] lg:flex-row lg:rounded-[80px]">
          <div className="absolute inset-0 lg:relative lg:h-[760px] lg:w-[840px] lg:flex-shrink-0">
            <Image
              src="/contact/formBg.png"
              fill
              className="hidden rounded-l-[80px] object-cover lg:block"
              alt="contact-bg"
            />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[760px] w-full flex-col lg:flex-row">
          <motion.div
            style={{
              scale: cartoonScale,
              y: cartoonY,
              opacity: cartoonOpacity,
            }}
            className="relative z-20 mx-auto mt-12 flex w-full max-w-[420px] flex-col items-center gap-[8px] px-8 py-12 lg:absolute lg:top-1/2 lg:left-[240px] lg:mt-0 lg:-translate-y-1/2"
          >
            <div className="relative h-[320px] w-[314px]">
              <Image
                src="/contact/cartoon.png"
                fill
                alt="contact character"
                className="object-contain"
              />
            </div>

            <h2 className="text-center text-3xl font-bold text-white md:text-[40px]">
              {CONTACT_US_STRINGS.HEADING}
            </h2>

            <p className="max-w-[360px] text-center text-sm leading-relaxed text-white">
              {CONTACT_US_STRINGS.DESCRIPTION}
            </p>

            <div className="mt-[24px] flex max-h-[120px] w-full max-w-[420px] flex-col gap-4 rounded-[12px] bg-[#A0FB8E]/60 px-6 py-5 text-white shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3 border-b border-black/10 pb-4 text-sm">
                <span className="flex items-center gap-2">
                  <Image
                    src="/icons/phone.svg"
                    width={20}
                    height={20}
                    alt="phone"
                  />
                  <span className="font-medium">
                    {CONTACT_US_STRINGS.PHONE.LABEL}
                  </span>
                </span>
                <span className="font-semibold">
                  {CONTACT_US_STRINGS.PHONE.NUMBER}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-2">
                  <Image
                    src="/icons/mail.svg"
                    width={20}
                    height={20}
                    alt="email"
                  />
                  <span className="font-medium">
                    {CONTACT_US_STRINGS.EMAIL.LABEL}
                  </span>
                </span>
                <span className="font-semibold">
                  {CONTACT_US_STRINGS.EMAIL.MAIL}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: formY, opacity: formOpacity, overflow: formOverflow }}
            onViewportEnter={() => {
              setTimeout(() => {
                nameInputRef.current?.focus();
              }, 300);
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-20 mx-auto my-10 max-h-[638px] w-full max-w-[500px] rounded-[20px] bg-[#DBEBFF] p-8 shadow-2xl lg:absolute lg:top-1/2 lg:right-10 lg:my-0 lg:-translate-y-1/2 lg:rounded-[32px]"
          >
            <motion.div
              style={{
                x: envelopeX,
                y: envelopeY,
                scale: envelopeScale,
                opacity: envelopeOpacity,
                filter: blurFilter,
                transformOrigin: "80% 20%",
                zIndex: 0,
              }}
              className="absolute top-0 right-0 h-[40px] w-[50px] lg:h-[200px] lg:w-[200px]"
            >
              <Image
                src="/line-mail.png"
                fill
                alt="envelope-bg"
                className="object-contain"
              />
            </motion.div>

            {/* Form Content */}
            <div className="relative z-10">
              <h3 className="font-sora mb-[20px] text-left text-[24px] font-semibold text-black">
                {CONTACT_US_STRINGS.FORM.HEADER}
              </h3>

              <form className="flex flex-col gap-5" noValidate>
                <label className="font-sora text-left text-[12px] font-medium text-black">
                  {CONTACT_US_STRINGS.FORM.NAME}
                  <input
                    type="text"
                    name="name"
                    className="mt-[4px] h-[36px] w-full rounded-[4px] border border-gray-200 bg-white/60 p-3 text-sm transition-all"
                    required
                  />
                </label>

                <label className="font-sora text-left text-[12px] font-medium text-black">
                  {CONTACT_US_STRINGS.FORM.EMAIL}
                  <input
                    type="email"
                    name="email"
                    className="mt-[4px] h-[36px] w-full rounded-[4px] border border-gray-200 bg-white/60 p-3 text-sm transition-all"
                    required
                  />
                </label>

                <label className="font-sora text-left text-[12px] font-medium text-black">
                  {CONTACT_US_STRINGS.FORM.PHONE}
                  <input
                    type="tel"
                    name="phone"
                    className="mt-[4px] h-[36px] w-full rounded-[4px] border border-gray-200 bg-white/60 p-3 text-sm transition-all"
                    required
                  />
                </label>

                <label className="font-sora text-left text-[12px] font-medium text-black">
                  {CONTACT_US_STRINGS.FORM.LOOKING_FOR}
                  <input
                    type="text"
                    name="lookingFor"
                    className="mt-[4px] h-[36px] w-full rounded-[4px] border border-gray-200 bg-white/60 p-3 text-sm transition-all"
                    required
                  />
                </label>

                <label className="font-sora text-left text-[12px] font-medium text-black">
                  {CONTACT_US_STRINGS.FORM.HELP_YOU}
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-[4px] w-full resize-none rounded-[4px] border border-gray-200 bg-white/60 p-3 text-sm transition-all"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="h-[56px] w-full rounded-[80px] bg-black text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-900 hover:shadow-xl active:scale-[0.98]"
                >
                  {CONTACT_US_STRINGS.FORM.SEND}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
