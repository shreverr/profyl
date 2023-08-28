/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur-bg': "url('../public/bg.svg')",
        'circle-bg': "url('../public/circle-bg.svg')",
      }
    },
  },
  plugins: [],
}

