/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    letterSpacing: {
      "-tight": "-0.03em",
    },
    extend: {
      colors: {
        black: "#444444",
        primary: { light: "#48d982", DEFAULT: "#30A55F", dark: "#26874d" },
        secondary: {
          light: "#f4f4f4",
          DEFAULT: "#CCCCCC",
          dark: "#888888",
        },
      },
    },
  },
  plugins: [],
};
