/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        black: "#444444",
        primary: "#30A55F",
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
