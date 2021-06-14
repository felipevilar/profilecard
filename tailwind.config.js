module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lgray: '#656C86'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
