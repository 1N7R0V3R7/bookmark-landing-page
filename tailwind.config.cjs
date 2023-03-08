/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      colors: {
        'primary-blue': 'hsl(231, 69%, 60%)',
        'primary-red': 'hsl(0, 94%, 66%)',
        'neutral-grayish-blue': 'hsl(229, 8%, 60%)',
        'neutral-dark-gray': 'rgb(83, 83, 94)',
        'neutral-very-dark-blue': 'hsl(229, 31%, 21%)'
      }
    },
  },
  plugins: [],
}
