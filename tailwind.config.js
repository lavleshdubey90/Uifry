/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["clash-display", "sans-serif"]
      },
      colors: {
        "theme": "#FF5555",
        "themeGray": "#808080",
      }
    },
  },
  plugins: [],
};
