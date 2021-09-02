const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: [
    './public/**/*.html',
    './dist/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky,
        cyan: colors.cyan,
        teal:colors.teal,
        orange:colors.orange,
        rose:colors.rose,
        fuchsia:colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
