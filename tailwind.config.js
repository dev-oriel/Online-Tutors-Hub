// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c5192",
        secondary: "#ffd816",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
