/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "trail-pink": "#eb0089",
        "trail-yellow": "#fff100",
        "trail-slate": "#36383F",
      },
      fontFamily: {
        sans: ["bilo"],
      },
    },
  },
  plugins: [],
};
