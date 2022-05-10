module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-blue': '#202026',
        'secondary-blue': '#313A47',
        'tertiary-blue': '#34445B',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(160px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
