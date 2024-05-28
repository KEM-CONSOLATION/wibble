/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bright: ["Bright South", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
    },
  },
  plugins: [],
};
