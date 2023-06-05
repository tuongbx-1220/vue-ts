/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class',
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontSize: {
      sm: "12px",
      base: "14px",
      m: "16px",
      l: "18px",
      xl: "24px",
      "2xl": "36px",
      "3xl": "48px",
    },
    colors: {
      black: "#4A4A4A",
      red: "#EE3311",
      pink: "#FFEFED",
      gray: "#EFEDED",
      dark: "#888888",
      light: "#F5F5F5",
      light2: "#E0E0E0",
      light3: "#EEEEEE",
      light4: "#C4C4C4 ",
      light5: "#464646",
      light6: "#A0A0A0",
      light7: "#EFEDED",
      light8: "#3F3F41",
      light9: "#FBFAFA",
      light10: "#CCC",
      light11: "#ECEFF3",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      purple2: "#247CDB",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  variants: {},
  plugins: [],
};
