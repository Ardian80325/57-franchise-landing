import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050403",
          900: "#0d0b09",
          850: "#15110d",
          800: "#241f18"
        },
        gold: {
          300: "#f4d68b",
          400: "#c99d52",
          500: "#8d6130"
        },
        brand: {
          red: "#d3212a",
          green: "#06c755",
          cream: "#f7f2e7",
          paper: "#ede9dd",
          sage: "#a2a98d",
          peach: "#e6ad95"
        }
      },
      boxShadow: {
        gold: "0 24px 80px rgba(201, 157, 82, 0.22)",
        red: "0 24px 80px rgba(211, 33, 42, 0.2)",
        line: "0 18px 48px rgba(6, 199, 85, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
