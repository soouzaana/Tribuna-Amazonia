/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-dark': '#0D4F3C',
        green: '#1B6B4D',
        emerald: '#2E8B57',
      },
    },
  },
  plugins: [],
}
