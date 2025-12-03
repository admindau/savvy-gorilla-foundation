// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rasta: {
          red: "#E53935",
          gold: "#FBC02D",
          green: "#43A047",
          dark: "#050505",
        },
      },
    },
  },
  plugins: [],
};

export default config;
