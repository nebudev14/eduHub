module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      },
      colors: {
        'deep-blue': '#221E38',
        'light-pink': '#D2A3DF',
        'pink-white': '#EBDCFF'
      },
      
    },
  },
  plugins: [],
}
