/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          900: '#060B19', // Deep Midnight Blue (replaces dark grey)
          800: '#0E172A', // Rich Dark Blue
          700: '#1E293B', // Slate equivalent for cards
          gold: '#D4AF37', // Classic rich gold
          silver: '#E2E8F0', // Brighter silver for text readability
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slow-pan': 'slowPan 30s linear infinite alternate',
        'ken-burns': 'kenBurns 20s ease-out forwards',
        'elegant-reveal': 'elegantReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1.05) translate(-2%, -2%)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.1) translate(0, 0)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        elegantReveal: {
          '0%': { opacity: '0', transform: 'translateY(15px) scale(0.98)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        }
      }
    },
  },
  plugins: [],
}
