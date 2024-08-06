import colors, { red } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        primary: colors.teal,
        secondary: colors.cyan,
        tertiary: colors.sky
      },
      fontFamily: {
        sans: ["Wix Madefor Display", "sans-serif"],
        title: ["Bebas Neue", "sans-serif"],
        design: ["Poiret One", "sans-serif"]
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("flowbite/plugin")],
};
