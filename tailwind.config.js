/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brown: "#d5bd9e",
      black: "#2e2e2e",
      blue: "#043a4e",
    },
    extend: {
      // backgroundImage: {
      //   bgMain: "url('./src/assets/img/background/bgMain.webp')",
      //   bgNav: "url('./src/assets/img/background/bgNav.webp')",
      // },
      fontFamily: {
        RDRLino: ["RDRLino"],
        Hapna: ["Hapna"],
        Bold: ["Bold"],
      },
    },
  },
  plugins: [],
};
