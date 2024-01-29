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
          100: '#EBEEFC', // lavender
          200: '#CAD2F7', // periwinkle
          300: '#A2A6F6', // tropical indigo
          400: '#7547FF', // majorelle blue
          500: '#571FFF', // electric indigo
          600: '#3A0CA3', // zaffre, search colour
          700: '#2F0A85', // 
          800: '#1A0066', // 
          900: '#0A0029', // russian violet
        },
        //green
        secondary: { 
          100: '#EBFFFD', // azure
          200: '#D6FFFA', // mint green
          300: '#a65e9d', // aquamarine
          400: '#49CEBD', // turquoise
          500: '#2EB4AB', // sea green
          600: '#127E88', // teal
          700: '#096073', // carribean current
          800: '#183A3A', // dark slate grey
          900: '#060E0E', // night
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
