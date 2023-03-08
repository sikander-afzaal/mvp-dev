/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MVP-Minecraft", ...defaultTheme.fontFamily.sans],
        dumbledore: ["MVP-Dumbuledore"],
        serious: ["MVP-Serious"],
        beauty: ["Quicksand"],
      },
      boxShadow: {
        button: "-5px 6px 2px #000",
      },
      colors: {
        red: "#ff0000",
        darkBlue: "#09163B",
      },
    },
  },
  plugins: [],
};
