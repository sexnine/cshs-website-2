const colors = require("tailwindcss/colors");
const glowPlugin = require("./tailwind_plugins_src/glow");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      red: colors.red,
      green: colors.green,
      pink: colors.pink,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      orange: colors.orange,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [glowPlugin],
};
