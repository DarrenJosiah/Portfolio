/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shareTech: ["Share Tech", "sans-serif"],
        trispace: ["Trispace", "sans-serif"],
      },
    },
  },
  plugins: [],
}

