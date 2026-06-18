/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta espacial + dourado Disney/Rapunzel
        space: {
          900: '#04060f',
          800: '#070b1c',
          700: '#0b1228',
          600: '#121a3a',
        },
        gold: {
          DEFAULT: '#f5d77a',
          soft: '#ffe9a8',
          deep: '#c9a24b',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 12px rgba(245,215,122,0.35)' },
          '50%': { textShadow: '0 0 28px rgba(245,215,122,0.75)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
