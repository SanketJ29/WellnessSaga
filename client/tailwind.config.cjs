/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '1.5xl': '1.325rem',
        '2.5xl': '1.7rem'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}