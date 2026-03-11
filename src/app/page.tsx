import Image from "next/image";
import type { Metadata } from "next";
import {
  OurClients,
  InnovateTechMain,
  FeatureMain,
  ContactScreen,
} from "@/components/DynamicSections";
import HomeClient from "@/components/HomeClient";
import ProductEngineering from "@/components/product-engg/ProductEngineering";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/ui/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home — Software & Digital Transformation",
    description:
      "Chromezy transforms your concept into market-ready reality. " +
      "Explore our MVP, SaaS, AI, and e-commerce engineering services.",
    openGraph: {
      title: "Chromezy — From Concept to Reality",
      description:
        "Software engineering and digital transformation. " +
        "MVP, SaaS, AI, e-commerce — built precisely and fast.",
    },
  };
}

const Home = () => {
  return (
    <>
      <section className="bg-brand-dark relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-36 text-center text-white">
        <div className="pointer-events-none absolute top-0 left-1/2 h-50 w-150 -translate-x-1/2 bg-[radial-gradient(circle,rgba(9,93,255,1),rgba(191,9,255,0.3))] blur-3xl" />
        <div className="pointer-events-none absolute top-0 left-0 h-50 w-75 -translate-x-1/2 bg-[radial-gradient(circle,rgba(9,93,255,0.5),rgba(191,9,255,0))] opacity-40 blur-2xl" />
        <div className="pointer-events-none absolute top-[90vh] left-0 h-75 w-150 translate-x-[-50%] bg-[radial-gradient(circle,rgba(9,93,255,0.5),rgba(191,9,255,0))] blur-3xl" />
        <div className="pointer-events-none absolute top-[60vh] right-0 h-85 w-200 translate-x-[50%] bg-[radial-gradient(circle,rgba(9,93,255,0.5),rgba(191,9,255,0))] opacity-50 blur-3xl" />

        <Image
          src="/shapes/rose2.png"
          alt="rose background"
          width={800}
          height={800}
          className="absolute top-120 left-190 -translate-x-1/2 -translate-y-1/2 -rotate-4 opacity-70 blur-2xl"
          priority
        />

        <HomeClient />

        <hr className="mt-20 mb-12.5 w-7xl border-t border-dashed border-white/20" />

        <div className="flex flex-wrap justify-center">
          {[
            "lg1.png",
            "lg2.png",
            "lg3.png",
            "lg4.png",
            "lg5.png",
            "lg6.png",
            "lg7.png",
          ].map((logo) => (
            <Image
              key={logo}
              src={`/brands/${logo}`}
              alt={logo.replace(".png", "")}
              width={142}
              height={72}
              priority
            />
          ))}
        </div>

        <hr className="mt-12.5 w-7xl border-t border-dashed border-white/20" />

        <ProductEngineering id="product-engineering" />
        <OurClients id="clients" />
        <SuccessStories id="success" />
        <InnovateTechMain id="innovate" />
        <FeatureMain id="features" />
        <ContactScreen id="contact" />

        <div className="pointer-events-none relative flex h-0 w-full justify-center">
          <div className="absolute -bottom-37.5 left-0 z-0 h-100 w-[500] bg-[radial-gradient(circle,rgba(9,93,255,1),rgba(191,9,255,0.3))] opacity-40 blur-3xl" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
