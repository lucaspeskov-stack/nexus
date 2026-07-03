/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Bordô & rosé — sofisticada e marcante
        cream: {
          50: '#FCF7F3',
          100: '#F7EFEA',
          200: '#F0E2DA',
          300: '#EAD9D2',
          400: '#DCC5BB',
        },
        wine: {
          400: '#9C3D4F',
          500: '#7E2A3B',
          600: '#5E1E2C',
          700: '#481621',
        },
        rose: {
          300: '#D9A597',
          400: '#C98B7A',
          500: '#B06F5E',
        },
        ink: '#2A1F22',
        stone: '#6E5A5E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(42, 31, 34, 0.06), 0 12px 34px rgba(42, 31, 34, 0.08)',
        'soft-lg': '0 6px 20px rgba(42, 31, 34, 0.10), 0 20px 50px rgba(42, 31, 34, 0.12)',
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
