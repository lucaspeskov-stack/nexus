/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Caramelo & preto — inspirada nos tons de onça, quente e premium
        cream: {
          50: '#FBF6EC',
          100: '#F6EFE4',
          200: '#EFE4D2',
          300: '#E4D5BE',
          400: '#D3BF9E',
        },
        caramel: {
          400: '#C98A3E',
          500: '#B67733',
          600: '#935D26',
          700: '#6F461C',
        },
        ink: '#1C160F',
        stone: '#6A5E4C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(28, 22, 15, 0.06), 0 12px 34px rgba(28, 22, 15, 0.08)',
        'soft-lg': '0 6px 20px rgba(28, 22, 15, 0.10), 0 20px 50px rgba(28, 22, 15, 0.12)',
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
