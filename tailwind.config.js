module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          600: '#DF6951'
        }
      },
      fontSize: {
        '7xl': ['5.25rem',1]
      },
      inset: {
        '18': '4.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
