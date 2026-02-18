//Product engineering section
export const SERVICE_CARD_CONTENT = [
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

export const LAYOUT_CONSTANTS = {
  SECTION_TITLE: "Product Engineering",
  SECTION_DESCRIPTION:
    "Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.",
};
//Testimonials cards
export const TESTIMONIALS = [
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

//Our clients section
export const CLIENT_SECTION_STRINGS = {
  TITLE: "Our Happy Clients",
  DESCRIPTION: "Dummy ipsum dolor sit amet, consectetur adipiscing elit",
};

export const SERVICE_CARD_UI = {
  DEFAULT_BG_COLOR: "#3D00A0",
  MIN_HEIGHT: "436px",
  IMAGE_DIMENSIONS: {
    width: "37.5",
    height: "44.25",
  },
  LABELS: {
    BADGE: "Our Services",
    BUTTON: "Talk to a Product Expert",
  },
  PATHS: {
    ARROW_ICON: "/shapes/arrow.svg",
  },
} as const;

export const TESTIMONIAL_LABELS = {
  STAR_RATING: "Star Rating",
  PROJECT: "Project",
  COUNTRY: "Country",
} as const;

//Navbar section
export const navItems = [
  { id: "home", label: "Home" },
  { id: "exploreai", label: "Explore AI" },
  { id: "services", label: "Services" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "products", label: "Products" },
  { id: "blogs", label: "Blogs" },
];

export const NAVBAR_LABELS = {
  ABOUT_US: "About Us",
  CONTACT_US: "Contant Us",
};

//Hero section
export const HOME_STRINGS = {
  HERO_BADGE: "Introducing AI Automation",
  TITLE_PART_1: "from ",
  TITLE_PART_2: "to ",
  CONCEPT: "CONCEPT",
  REALITY: "REALITY",
  SUBHEADING: "We Engineer your Software Success & Digital Transformation.",
  DESCRIPTION:
    "At Chromexy, we translate your ideas into market-ready solutions quickly and precisely. Leveraging the power of technology and prioritizing user needs, we deliver products that are both cutting-edge and user-centric.",
};

export const STATS_DATA = [
  { value: "200%", label: "Revenue Growth" },
  { value: "4X", label: "Speed to Market" },
  { value: "73%", label: "New Orders" },
  { value: "10K+", label: "Active Users" },
];

//Success Stories section
export const STORIES = [
  {
    id: 1,
    image: "/cards/fin.png",
    title: "FinConnect",
    subtitle: "Customer Relationship Management (CRM)",
    label: "Success Stories",
  },
  {
    id: 2,
    image: "/cards/health.png",
    title: "HealthSync",
    subtitle: "Health Tracking App for Patients and Doctors",
    label: "Success Stories",
  },
  {
    id: 3,
    image: "/cards/commerce.png",
    title: "Commerce360",
    subtitle: "Online Store, Multivendor Marketplace & E-commerce Apps",
    label: "Success Stories",
  },
  {
    id: 4,
    image: "/cards/ai.png",
    title: "PrintwithAI",
    subtitle:
      "Web-to-Print Software / Online Design Tool / Product Designer Tool",
    label: "Success Stories",
  },
  {
    id: 5,
    image: "/cards/pm.png",
    title: "PM Insights",
    subtitle: "Project Management Tool (SaaS & Hosted)",
    label: "Success Stories",
  },
] as const;

export const SUCCESS_STRING = {
  HEADING: "Success Stories",
  DESCRIPTION:
    "Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
};

//Innovative section
export const INNOVATIVE_STRINGS = {
  HEADING: "INNOVATIVE TECHNOLOGIES KEEPING US AHEAD",
  DESCRIPTION:
    "Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements.",
} as const;

export const CATEGORIES = [
  {
    id: "01",
    title: "Web App Development",
    items: [
      "React",
      "Node",
      "Angular",
      "Vue",
      "ExpressJS",
      "AdobeXD",
      "Figma",
      "Whimsical",
    ],
  },
  {
    id: "02",
    title: "Mobile App Development",
    items: ["Flutter", "Kotlin", "Swift", "React Native", "AdobeXD", "Figma"],
  },
  {
    id: "03",
    title: "E-commerce",
    items: ["Shopify", "WooCommerce", "Prestashop"],
  },
  {
    id: "04",
    title: "Analytics",
    items: [
      "Python",
      "PowerBI",
      "Tableau",
      "Amazon QuickSight",
      "Apache Spark",
    ],
  },
  {
    id: "05",
    title: "Data & Cloud",
    items: [
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "Google Cloud",
      "Ola Krutrim",
    ],
  },
];

//Feature section
export const FEATURE_STRINGS = {
  HEADING: "Featured Insights",
  DESCRIPTION:
    "Were you looking to explore a specific topic? You're in the right spot.",
};

export const INSIGHTS = [
  {
    key: 1,
    imgSrc: "/featured/game.png",
    heading: "Successful MVP Launches That Changed the Game.",
    text: "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success.",
  },
  {
    key: 2,
    imgSrc: "/featured/product.png",
    heading: "How Our AI Product Development Company is Pioneering Innovation?",
    text: "Discover how our product development company pioneers innovation. From groundbreaking Services to creative strategies, we're shaping the future.",
  },
  {
    key: 3,
    imgSrc: "/featured/ai.png",
    heading:
      "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
    text: "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions.",
  },
] as const;

//Footer section
export const FOOTER_STRINGS = {
  COPYRIGHT_STRINGS: {
    YEAR: "Copyright © 2026",
    RIGHTS: "Chromezy, All Rights Reserved",
    OWNER: "Designed by Ipsita Mohanty",
  },
  CONNECT: "Connect with us:",
  NAVIGATION_COLUMNS: {
    HOME: "Home",
    ABOUT_US: "About Us",
    CARRER: "Career",
    CASE_STUDY: "Case Study",
    TEAM: "Join the Team",
    AI: "AI",
    MVP: "MVP",
    SAAS: "Saas",
    ECOM: "E-commerce",
    WORK_WITH_US: "Work with us",
  },
  CONTACT_INFO: {
    PHONE: "+1 315 308 0901",
    EMAIL: "sales@chromezy.com",
  },
  TERMS: {
    TERMS: "Terms",
    PRIVACY: "Privacy",
  },
  DESCRIPTION:
    "Not just about software & Product development; we're your tech partners, crafting modern digital solutions for next-gen excellence!",
};
