/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          900: '#0a0f1c',
          800: '#111827',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
        sans: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
