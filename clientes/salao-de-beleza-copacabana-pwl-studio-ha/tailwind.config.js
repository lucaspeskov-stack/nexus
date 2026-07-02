/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta nude/greige + bronze — extraída para refletir um estúdio real
        sand: {
          50: '#FBF8F3',
          100: '#F6F1E9',
          200: '#EFE7DB',
          300: '#E3D8C8',
          400: '#D6C7B2',
        },
        bronze: {
          300: '#D2AC82',
          400: '#C79A6E',
          500: '#A97C50',
          600: '#8A6238',
          700: '#6E4E2C',
        },
        ink: '#2B2622',
        stone: '#6E645A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(43, 38, 34, 0.06), 0 12px 34px rgba(43, 38, 34, 0.08)',
        'soft-lg': '0 6px 20px rgba(43, 38, 34, 0.10), 0 20px 50px rgba(43, 38, 34, 0.12)',
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
