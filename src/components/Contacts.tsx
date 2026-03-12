"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CONTACT_US_STRINGS } from "@/utils/constants";
import { SectionProps } from "@/types";
import { useContactAnimations } from "@/hooks/useContactAnimations";
import SuccessModal from "./ui/SuccessModal";

function ContactScreen({ id }: SectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Invalid email address";
    if (formData.phone.length < 10)
      newErrors.phone = "Enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Please leave a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        lookingFor: "",
        message: "",
      });
      nameInputRef.current?.focus();
    }
  };

  const {
    cartoonScale,
    cartoonY,
    cartoonOpacity,
    formY,
    formOverflow,
    envelopeY,
    envelopeX,
    envelopeScale,
    envelopeOpacity,
    blurFilter,
  } = useContactAnimations(sectionRef);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="relative z-30 mt-10 mb-40 w-full px-6 md:px-10 lg:px-20"
    >
      <AnimatePresence>
        {isModalOpen && (
          <SuccessModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
      <div className="relative mx-auto min-h-190 w-full max-w-330 rounded-[40px] shadow-2xl lg:rounded-[80px]">
        <div className="bg-contact-bg absolute inset-0 z-0 flex flex-col overflow-hidden rounded-[40px] lg:flex-row lg:rounded-[80px]">
          <div className="absolute inset-0 lg:relative lg:h-190 lg:w-210 lg:shrink-0">
            <Image
              src="/contact/formBg.png"
              fill
              className="hidden rounded-l-[80px] object-cover lg:block"
              alt="contact-bg"
            />
          </div>
        </div>

        <div className="relative z-10 flex min-h-190 w-full flex-col lg:flex-row">
          <motion.div
            style={{
              scale: cartoonScale,
              y: cartoonY,
              opacity: cartoonOpacity,
            }}
            className="relative z-20 mx-auto mt-12 flex w-full max-w-105 flex-col items-center gap-2 px-8 py-12 lg:absolute lg:top-1/2 lg:left-60 lg:mt-0 lg:-translate-y-1/2"
          >
            <div className="relative h-80 w-78.5">
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

            <p className="max-w-90 text-center text-sm leading-relaxed text-white">
              {CONTACT_US_STRINGS.DESCRIPTION}
            </p>

            {/* Contact info card */}
            <div className="bg-green-bg mt-6 flex max-h-30 w-full max-w-105 flex-col gap-4 rounded-lg px-6 py-5 text-white shadow-lg backdrop-blur-sm">
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
            style={{ y: formY, overflow: formOverflow }}
            onViewportEnter={() => {
              setTimeout(() => {
                nameInputRef.current?.focus();
              }, 300);
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-20 mx-auto my-10 max-h-159.5 w-full max-w-125 rounded-[20px] bg-[#DBEBFF] p-8 shadow-2xl lg:absolute lg:top-1/2 lg:right-10 lg:my-0 lg:-translate-y-1/2 lg:rounded-4xl"
          >
            <motion.div
              style={{
                x: envelopeX,
                y: envelopeY,
                scale: envelopeScale,
                opacity: envelopeOpacity,
                filter: blurFilter,
                zIndex: 0,
              }}
              className="absolute top-0 right-0 h-10 w-12.5 lg:h-50 lg:w-50"
            >
              <Image
                src="/line-mail.png"
                fill
                sizes="(max-width: 1024px) 50px, 200px"
                alt="envelope-bg"
                className="object-contain"
              />
            </motion.div>

            {/* Form content */}
            <div className="relative z-10">
              <h3 className="font-sora mb-3 text-left text-[24px] font-semibold text-black">
                {CONTACT_US_STRINGS.FORM.HEADER}
              </h3>

              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                noValidate
              >
                {[
                  {
                    label: CONTACT_US_STRINGS.FORM.NAME,
                    name: "name",
                    type: "text",
                    ref: nameInputRef,
                  },
                  {
                    label: CONTACT_US_STRINGS.FORM.EMAIL,
                    name: "email",
                    type: "email",
                  },
                  {
                    label: CONTACT_US_STRINGS.FORM.PHONE,
                    name: "phone",
                    type: "tel",
                  },
                  {
                    label: CONTACT_US_STRINGS.FORM.LOOKING_FOR,
                    name: "lookingFor",
                    type: "text",
                  },
                ].map((field) => (
                  <label
                    key={field.name}
                    className="font-sora text-left text-[12px] font-medium text-black"
                  >
                    {field.label}
                    <input
                      ref={field.ref}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className={`h-9 w-full rounded-[4px] border ${errors[field.name] ? "border-red-500" : "border-gray-200"} bg-white/60 p-3 text-sm transition-all focus:outline-none`}
                    />
                    {errors[field.name] && (
                      <span className="text-[10px] text-red-500">
                        {errors[field.name]}
                      </span>
                    )}
                  </label>
                ))}

                <label className="font-sora text-left text-[12px] font-medium text-black">
                  {CONTACT_US_STRINGS.FORM.HELP_YOU}
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 w-full resize-none rounded-[4px] border ${errors.message ? "border-red-500" : "border-gray-200"} bg-white/60 p-3 text-sm transition-all focus:outline-none`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500">
                      {errors.message}
                    </span>
                  )}
                </label>

                <button
                  type="submit"
                  className="mb-2 h-14 w-full cursor-pointer rounded-[80px] bg-black text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-900 active:scale-[0.98]"
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
