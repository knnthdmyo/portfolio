import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#f8f7f3",
          200: "#eae6d9",
          300: "#d8d2b6",
          400: "#c7be93",
          500: "#b4b0ab",
          600: "#9e9689",
          700: "#8b7f6c",
          800: "#786a57",
          900: "#665b47",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;

