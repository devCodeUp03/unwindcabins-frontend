/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cabin: "#2B3030",
        xp: "#596363",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
