// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', ...fontFamily.sans],
        display: ['var(--font-display)', ...fontFamily.serif]
      },
      colors: {
        //purple
        // primary: { 
        //   50: '#F9F6FF',
        //   100: '#F0EBFF',
        //   200: '#C9ADFF',
        //   300: '#AD85FF',
        //   400: '#7547FF',
        //   500: '#571FFF',
        //   600: '#3800E0',
        //   700: '#250674',
        //   800: '#1F0561',
        //   900: '#13033A',
        //   950: '#0A0029',
        // },
        // purple

        primary: { 
          100: '#F8F2F8',
          200: '#7547FF', // majorelle
          300: '#C30985', // pink
          400: '#571FFF', // electric indigo
          500: '#0A0029',
          600: '#C30985', // for search colour
        },
        //green
        secondary: { 
          100: '#EBFFFC',
          200: '#D6FFF9',
          300: '#00F5D4', // aquamarine
          400: '#00A38D',
          500: '#02263B',
        },
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
