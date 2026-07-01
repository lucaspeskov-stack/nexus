/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sofisticado escuro «bistrô» — espresso + dourado quente
        espresso: {
          950: '#0F0C0A',
          900: '#161110',
          800: '#1E1815',
          700: '#2A221D',
          600: '#392E27',
          500: '#4A3B31',
        },
        gold: {
          200: '#F0DFB4',
          300: '#E4C77E',
          400: '#D4AF5A',
          500: '#C9A24B',
          600: '#A9843A',
          700: '#856526',
        },
        cream: '#F4ECDD',
        sand: '#C9BBA4',
        muted: '#9A8B76',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.35), 0 12px 40px rgba(0,0,0,0.35)',
        gold: '0 10px 30px rgba(201, 162, 75, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
