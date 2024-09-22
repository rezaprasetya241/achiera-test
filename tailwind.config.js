/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray300: "#808080",
        gray400: "#333333",
        gray500: "#262626",
        gray600: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
