/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bright: ["Bright South", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
      screens: {
        xxs: "100px",
        xs: "370px",
      },
    },
  },
  plugins: [],
};
