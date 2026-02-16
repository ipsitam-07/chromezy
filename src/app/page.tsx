import Image from "next/image";
import React from "react";
import { HomeClient } from "@/components/HomeClient";
import ProductEngineering from "@/components/ProductEngineering";
import OurClients from "@/components/OurClients";

const Home = () => {
  return (
    <>
      <section className="bg-background relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-36 text-center text-white">
        <div className="pointer-events-none absolute top-0 left-1/2 h-50 w-150 -translate-x-1/2 bg-[radial-gradient(circle,rgba(9,93,255,1),rgba(191,9,255,0.3))] blur-3xl" />
        <div className="pointer-events-none absolute top-0 left-0 h-50 w-75 -translate-x-1/2 bg-[radial-gradient(circle,rgba(9,93,255,0.5),rgba(191,9,255,0))] opacity-40 blur-2xl" />
        <div className="pointer-events-none absolute top-[90vh] left-0 h-75 w-150 translate-x-[-50%] bg-[radial-gradient(circle,rgba(9,93,255,0.5),rgba(191,9,255,0))] blur-3xl" />
        <div className="pointer-events-none absolute top-[50vh] right-0 h-75 w-150 translate-x-[50%] bg-[radial-gradient(circle,rgba(9,93,255,0.5),rgba(191,9,255,0))] blur-3xl" />

        <Image
          src="/shapes/rose2.png"
          alt="rose background"
          width={800}
          height={800}
          className="absolute top-120 left-190 -translate-x-1/2 -translate-y-1/2 -rotate-4 opacity-70 blur-2xl"
        />
        <HomeClient />
        <hr className="mt-20 mb-12.5 w-7xl border-t border-dashed border-white/20" />

        <div className="flex flex-wrap justify-center opacity-80">
          <Image src="/logos/lg1.png" alt="logo1" width={149.1} height={72} />
          <Image src="/logos/lg2.png" alt="logo2" width={149.1} height={72} />
          <Image src="/logos/lg3.png" alt="logo3" width={149.1} height={72} />
          <Image src="/logos/lg4.png" alt="logo4" width={149.1} height={72} />
          <Image src="/logos/lg5.png" alt="logo5" width={149.1} height={72} />
          <Image src="/logos/lg6.png" alt="logo6" width={149.1} height={72} />
          <Image src="/logos/lg7.png" alt="logo7" width={149.1} height={72} />
        </div>

        <hr className="mt-12.5 w-7xl border-t border-dashed border-white/20" />

        <ProductEngineering />
        <OurClients />
      </section>
    </>
  );
};

export default Home;
