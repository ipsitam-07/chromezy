import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },

      colors: {
        brand: {
          primary: "#4380ff",
          secondary: "#11deff",
          tertiary: "#9d84f2",
          dark: "#151a2c",
          navbar: "#010201",
        },
        text: {
          accent: "#bdf4d0",
          highlight: "#8fd797",
          hero: "#ecf4bd",
          muted: "#ffffffcc",
        },
        contact: {
          bg: "#aacffe",
          greenBg: "rgba(160, 251, 142, 0.6)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
