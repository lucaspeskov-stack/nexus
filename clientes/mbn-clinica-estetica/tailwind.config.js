/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Petróleo/teal + areia/creme + dourado champagne — clínica premium, serena
        cream: {
          50: '#FAF7F2',
          100: '#F3ECE2',
          200: '#E9DECF',
          300: '#DBCBB4',
          400: '#C9B392',
        },
        teal: {
          400: '#4C8C88',
          500: '#2F726E',
          600: '#1F5A57',
          700: '#164342',
        },
        gold: {
          400: '#C9A25A',
          500: '#B4863D',
          600: '#92692C',
        },
        ink: '#1E2A29',
        stone: '#566462',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(22, 43, 42, 0.06), 0 12px 34px rgba(22, 43, 42, 0.08)',
        'soft-lg': '0 6px 20px rgba(22, 43, 42, 0.10), 0 20px 50px rgba(22, 43, 42, 0.12)',
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
