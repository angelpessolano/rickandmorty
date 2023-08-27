/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
       colors:{
      'primary':{
        100: '#EEE3FF',
        600: '#8054C7',
        700: '#5A3696',

      },
      'secondary':{
        600:'#63D838',
      },

    },

    },
  },
  plugins: [],
}