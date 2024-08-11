/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      // screens: {
      //   sm: "576px",
      //   md: "768px",
      //   lg: "960px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      // },
    },
  },
  plugins: [],
};
