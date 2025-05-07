/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#1DA1F2', // Twitter blue
          600: '#0d8ddb',
          700: '#0b7bc1',
          800: '#0969a7',
          900: '#075a8d',
        },
        purple: {
          500: '#6E33D5', // Secondary color
        },
      },
      animation: {
        'like-bounce': 'like-bounce 0.45s ease-in-out',
      },
      keyframes: {
        'like-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};