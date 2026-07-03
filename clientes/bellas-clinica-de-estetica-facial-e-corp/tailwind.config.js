/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Rosé/blush + creme + bronze — feminina, clean e acolhedora
        cream: {
          50: '#FDF9F6',
          100: '#F8EFEA',
          200: '#F1E3DB',
          300: '#E7D3CA',
          400: '#D8B8A9',
        },
        rose: {
          400: '#C08B84',
          500: '#A86C66',
          600: '#8A544F',
          700: '#6C403C',
        },
        bronze: {
          400: '#C6A47D',
          500: '#B08968',
          600: '#8E6C4C',
        },
        ink: '#2E2320',
        stone: '#6E5E58',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(46, 35, 32, 0.06), 0 12px 34px rgba(46, 35, 32, 0.08)',
        'soft-lg': '0 6px 20px rgba(46, 35, 32, 0.10), 0 20px 50px rgba(46, 35, 32, 0.12)',
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
