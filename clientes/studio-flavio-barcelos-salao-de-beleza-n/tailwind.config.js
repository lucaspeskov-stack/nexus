/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#fad5d1',
          300: '#f5b5ae',
          400: '#ed8a80',
          500: '#e15f50',
          600: '#cd4032',
          700: '#ab3327',
          800: '#8e2d24',
          900: '#762a24',
        },
        gold: {
          50: '#fefbeb',
          100: '#fef3c7',
          200: '#fee68a',
          300: '#fed44d',
          400: '#fdbf22',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
    },
  },
  plugins: [],
}
