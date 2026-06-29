/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Ameixa profunda — base escura e sofisticada (identidade "I AM")
        ink: {
          DEFAULT: '#241820',
          900: '#160d13',
          800: '#241820',
          700: '#33232d',
          600: '#46313e',
        },
        // Rose gold / cobre — metal nobre da marca
        rose: {
          DEFAULT: '#c0846f',
          soft: '#e6c4b3',
          light: '#f4e3d9',
          deep: '#9c6450',
        },
        // Malva / blush — acento feminino e suave
        mauve: {
          DEFAULT: '#caa1ac',
          soft: '#ecd9df',
          deep: '#a3717f',
        },
        // Cremes — fundos claros e elegantes
        cream: {
          DEFAULT: '#faf5f1',
          100: '#fdfaf7',
          200: '#f3e8e1',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
        widest3: '0.42em',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.16) translate3d(0,-1.5%,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollCue: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '80%, 100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        kenburns: 'kenburns 26s ease-out alternate infinite',
        shimmer: 'shimmer 6s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        scrollCue: 'scrollCue 1.8s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(36,24,32,0.35)',
        card: '0 24px 60px -28px rgba(36,24,32,0.45)',
      },
    },
  },
  plugins: [],
}
