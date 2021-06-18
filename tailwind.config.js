module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
    spacing: {
      '460': '410px',
      '727': '648px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
