import TestimonialCards from "./TestimonialCards";

const testimonials = [
  {
    key: "jeet",
    feedback:
      "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
    name: "JEET OBERAI",
    designation: "(Entrepreneur)",
    company: "PayLoan",
    starRating: "4.8/5",
    project: "Product Development",
    country: "Singapore",
    brandLogo: "/brands/lg8.svg",
  },
  {
    key: "marc",
    feedback:
      "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
    name: "MARC DOLLON",
    designation: "CTO",
    company: "MasterStudy",
    starRating: "5/5",
    project: "SaaS-Based Cloud ERP",
    country: "United States",
    brandLogo: "/brands/lg1.png",
  },
  {
    key: "brandon",
    feedback:
      "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
    name: "BRANDON LAU",
    designation: "(CEO)",
    company: "KIRI Journey",
    starRating: "5/5",
    project: "E-commerce Development",
    country: "HongKong",
    brandLogo: "/brands/lg4.png",
  },
  {
    key: "jefta",
    feedback:
      "We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.",
    name: "JEFTA MUGWENI",
    designation: "(CEO)",
    company: "Campion Savings Club",
    starRating: "5/5",
    project: "Custom CRM MVP Development",
    country: "Zimbabwe",
    brandLogo: "/brands/lg3.png",
  },
];

function OurClients() {
  return (
    <div className="relative z-30 mt-32 w-full px-6 md:px-10 lg:px-20">
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,128,255,0.12),rgba(157,132,242,0.08))] blur-3xl" />

      <div className="relative z-10 mb-12 max-w-175">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Our Happy Clients
        </h2>
        <p className="text-base text-white/70 md:text-lg">
          Dummy ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="relative z-10">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {testimonials.map((t) => (
            <div key={t.key} className="shrink-0 snap-start">
              <TestimonialCards
                feedback={t.feedback}
                name={t.name}
                designation={t.designation}
                company={t.company}
                starRating={t.starRating}
                project={t.project}
                country={t.country}
                brandLogo={t.brandLogo}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 cursor-pointer rounded-full bg-white/20 transition-colors hover:bg-white/40"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurClients;
