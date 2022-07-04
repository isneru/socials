/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        wide: "2000px",
        xs: "450px",
      },
      colors: {
        background: "#232946",
        button: "#eebbc3",
        buttontext: "#232946",
        buttonstroke: "#121629",
        headline: "#eebbc3",
        paragraph: "#b8c1ec",
        highlight: "#fffffe",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
