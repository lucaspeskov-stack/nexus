/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Sol/dourado quente — luminosa e acolhedora
        cream: {
          50: '#FEFBF5',
          100: '#FBF4E9',
          200: '#F5EAD8',
          300: '#EADFCB',
          400: '#DFCFB2',
        },
        sun: {
          300: '#E08A54',
          400: '#D67B45',
          500: '#C96F3C',
          600: '#A85628',
          700: '#83421E',
        },
        gold: {
          400: '#CBA05A',
          500: '#B8893C',
          600: '#966E2C',
        },
        ink: '#2A211A',
        stone: '#6E5E4E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(42, 33, 26, 0.06), 0 12px 34px rgba(42, 33, 26, 0.08)',
        'soft-lg': '0 6px 20px rgba(42, 33, 26, 0.10), 0 20px 50px rgba(42, 33, 26, 0.12)',
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
        // Ken Burns: zoom lento 1 -> 1.08, ~18s, loop suave (vai-e-volta)
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
