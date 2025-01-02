/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'teal-custom': '#008080',
        'teal-opacity': 'rgba(0, 128, 128, 0.21)',
        'golden-yellow': '#E8C81F',
      },
      fontFamily: {
        'yeon-sung': ['"Yeon Sung"', 'cursive'],
        wave: ['Wavefont', 'sans-serif'], // Use 'wave' for the custom font
      },
    },
  },
  plugins: [],
}

