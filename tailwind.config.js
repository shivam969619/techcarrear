/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#E7E7E7",
        customGray1: "rgb(110, 109, 109)",
        customRed: "rgb(220, 74, 45)",
        customRed1: "rgb(240, 185, 174)",
        customRed2: "rgb(254, 244, 242)",
        customgray: "rgb(176, 176, 176)",
        customgraye: "rgb(218, 218, 218)",
        customblack: "rgb(136, 136, 136)",
        customblack1: "rgb(61, 61, 61)",
      },
    },
  },
  plugins: [],
};
