"use client";
import dynamic from "next/dynamic";

export const OurClients = dynamic(
  () => import("@/components/our-clients/OurClients")
);
export const InnovateTechMain = dynamic(
  () => import("@/components/innovative-section/InnovativeTechMain")
);
export const FeatureMain = dynamic(
  () => import("@/components/feature-section/FeatureMain")
);
export const ContactScreen = dynamic(() => import("@/components/Contacts"));
