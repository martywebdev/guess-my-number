/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./*.html",  "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        press: ['"Press Start 2P"', 'sans-serif']
      }, 
      colors : {
        lightGray: '#eee'
      }
    },
  },
  plugins: [],
};
