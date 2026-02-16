import ServiceCard from "./ProductServiceCard";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const serviceCardContent = [
  {
    key: "mvp",
    svgSrc: "/services/mvp.svg",
    heading: "MVP",
    content:
      "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
    bgColor: "#2F41A3",
  },
  {
    key: "saas",
    svgSrc: "/services/saas.svg",
    heading: "SaaS",
    content:
      "Take your business to new heights with our all-inclusive SaaS development, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.",
    bgColor: "#7E2148",
  },
  {
    key: "ai",
    svgSrc: "/services/ai.svg",
    heading: "AI",
    content:
      "We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes",
    bgColor: "#AA7333",
  },
  {
    key: "b2b",
    svgSrc: "/services/b2b.svg",
    heading: "B2B & B2C Commerce Transformation",
    content:
      "We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.",
    bgColor: "#224A38",
  },
];

function ProductEngineering() {
  return (
    <div
      className={`relative z-30 mt-32 w-full px-6 md:px-10 lg:px-20 ${sora.variable} font-sora antialiased`}
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.15),rgba(157,132,242,0.1))] blur-3xl" />

      {/* Header section */}
      <div className="relative z-10 mb-16 max-w-[700px]">
        <div className="mb-4 flex items-center gap-3">
          <div className="from-background-primary/20 to-background-tertiary/20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
            <div className="from-background-primary to-background-tertiary h-6 w-6 rounded-full bg-gradient-to-br" />
          </div>
        </div>

        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Product Engineering
        </h2>

        <p className="text-base leading-relaxed text-white/70 md:text-lg">
          Discover the impact of bespoke digital solutions tailored precisely to
          your business&apos;s distinct requirements. Our experienced team of
          professionals ensures you receive outstanding results that
          consistently exceed your expectations.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {serviceCardContent.map((card) => (
          <ServiceCard
            key={card.key}
            svgSrc={card.svgSrc}
            heading={card.heading}
            content={card.content}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductEngineering;
