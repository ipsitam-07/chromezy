"use client";
import { motion } from "framer-motion";
import { SuccessModalProps } from "@/types";
import { SUCCESS_MODAL } from "@/utils/constants";

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm overflow-hidden rounded-4xl bg-white p-10 text-center shadow-2xl"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <svg
            className="h-10 w-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          {SUCCESS_MODAL.HEADER}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">
          {SUCCESS_MODAL.DESCRIPTION}
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-black py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-95"
        >
          {SUCCESS_MODAL.OKAY}
        </button>
      </motion.div>
    </motion.div>
  );
}
