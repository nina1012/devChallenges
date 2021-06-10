module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        primaryLight: '#1E213A',
        primaryDark: '#100E1D',
        buttonGray: ' #6E707A',
        buttonPurple: '#3C47E9',
        grayLight: '#A09FB1',
        brownDark: '#616475'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
