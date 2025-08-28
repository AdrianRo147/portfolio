// tailwind.config.js
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
/*module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|card|chip|divider|form|input|link|navbar|toast|ripple|spinner).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],*/

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // <-- important
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
