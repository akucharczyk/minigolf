// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      width: {
        'fit': 'fit-content'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
