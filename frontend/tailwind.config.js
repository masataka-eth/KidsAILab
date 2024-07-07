/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "paper-yellow": "#f6f1f0", // コンテンツの背景色
      },
    },
  },
  plugins: [],
};
