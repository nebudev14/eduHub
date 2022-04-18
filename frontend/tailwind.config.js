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
        'blue2': '#382f54',
        'light-pink': '#D2A3DF',
        'pink-white': '#EBDCFF'
      },
      keyframes: {
        'bop': {
          '0%': {
            transform: 'translateY(0)'
          },
          '45%': {
            transform: 'translateY(5%)'
          },
          '100%': {
            transform: 'translateY(-5%)'
          },
        }
      },
      animation: {
        bop: 'bop 5s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
