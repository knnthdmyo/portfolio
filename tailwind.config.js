// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
