/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      height: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      colors: {
        // Define semantic tokens for theming
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        primary: 'var(--color-primary)',
      },
    },
  },
  plugins: [],
};
