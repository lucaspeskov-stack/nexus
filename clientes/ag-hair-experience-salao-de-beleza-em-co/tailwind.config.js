/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Ameixa/plum + champanhe + dourado — sofisticada e premium
        champagne: {
          50: '#FBF7F1',
          100: '#F3ECE2',
          200: '#EBE0D2',
          300: '#DED0BC',
          400: '#CBB79C',
        },
        plum: {
          400: '#7A4E70',
          500: '#5E3A55',
          600: '#4A2C43',
          700: '#382132',
        },
        gold: {
          400: '#D2B074',
          500: '#C29B5A',
          600: '#9E7C3F',
        },
        ink: '#2B1F28',
        stone: '#6B5F66',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(43, 31, 40, 0.06), 0 12px 34px rgba(43, 31, 40, 0.08)',
        'soft-lg': '0 6px 20px rgba(43, 31, 40, 0.10), 0 20px 50px rgba(43, 31, 40, 0.12)',
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
