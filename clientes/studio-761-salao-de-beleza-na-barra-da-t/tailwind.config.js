/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Esmeralda + creme + latão — sofisticada e moderna
        cream: {
          50: '#FCFAF4',
          100: '#F6F3EC',
          200: '#EEE9DA',
          300: '#E4DECF',
          400: '#D3C9AF',
        },
        emerald: {
          400: '#2E7A66',
          500: '#1F5A4C',
          600: '#16443A',
          700: '#0F332B',
        },
        brass: {
          400: '#C6A15E',
          500: '#B0894C',
          600: '#8F6E37',
        },
        ink: '#20302B',
        stone: '#5F6B64',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(15, 51, 43, 0.06), 0 12px 34px rgba(15, 51, 43, 0.08)',
        'soft-lg': '0 6px 20px rgba(15, 51, 43, 0.10), 0 20px 50px rgba(15, 51, 43, 0.12)',
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
