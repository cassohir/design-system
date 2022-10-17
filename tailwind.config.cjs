/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#fff",

      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        200: "#C4C4CC",
        100: "#E1E1E6",
      },

      green: {
        300: "#269912",
        200: "#39C820",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
