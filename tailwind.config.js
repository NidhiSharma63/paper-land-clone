/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // extends breakeven points
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
