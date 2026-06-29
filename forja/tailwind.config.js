/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base — quase-preto da marca
        ink: {
          900: '#0A0A0B', // background
          800: '#0D0D0E', // surface
          700: '#141416', // elevated
          600: '#1B1B1E', // borders / hover
        },
        // Fogo da forja (gradiente do logo)
        ember: {
          100: '#FFD9A8',
          200: '#FFA62B', // âmbar
          400: '#FF6B1A', // laranja (accent principal)
          600: '#E2360F', // brasa
        },
        bone: '#EDE7DD', // off-white (texto)
        ash: '#9A938A',  // texto secundário
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '1200px',
      },
      boxShadow: {
        ember: '0 0 40px -8px rgba(255,107,26,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
