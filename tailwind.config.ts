// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
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
