/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Sálvia/eucalipto + off-white + bronze — clean e calmante
        cream: {
          50: '#FBFAF6',
          100: '#F4F3EC',
          200: '#E9E9DE',
          300: '#DBDBCB',
          400: '#C4C6B0',
        },
        sage: {
          400: '#8B9E86',
          500: '#6E8368',
          600: '#566A51',
          700: '#41513E',
        },
        bronze: {
          400: '#C2A277',
          500: '#A98A5E',
          600: '#886C45',
        },
        ink: '#2A2E27',
        stone: '#626759',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(42, 46, 39, 0.06), 0 12px 34px rgba(42, 46, 39, 0.08)',
        'soft-lg': '0 6px 20px rgba(42, 46, 39, 0.10), 0 20px 50px rgba(42, 46, 39, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
