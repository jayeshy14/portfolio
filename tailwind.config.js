import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        rose: colors.rose,
        orange: colors.orange,
        yellow: colors.yellow,
        purple: colors.purple,
        pink: colors.pink,
        blue: colors.blue,
        green: colors.green,
        red: colors.red,
      }
    },
  },
  safelist: [
    {
      pattern: /from-(blue|green|red|yellow|purple|pink|orange|cyan|teal|emerald|rose)-500/,
    },
    {
      pattern: /to-(blue|green|red|yellow|purple|pink|orange|cyan|teal|emerald|rose)-600/,
    },
  ],
  plugins: [],
} 