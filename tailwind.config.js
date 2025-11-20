/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        peacock: '#0066B2',
        maroon: '#800000',
        gold: '#FFD700',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'noto': ['Noto Serif Devanagari', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'slide-in-up': 'slide-in-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'rotate-scale': 'rotate-scale 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 153, 51, 0.8)',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 153, 51, 1)',
            opacity: '0.9'
          },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(255, 153, 51, 0.6), 0 0 10px rgba(0, 102, 178, 0.3)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(255, 153, 51, 1), 0 0 30px rgba(0, 102, 178, 0.6)'
          },
        },
        'rotate-scale': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(10deg) scale(1.05)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        'wave': {
          '0%': { transform: 'translateX(-100%) translateY(0)' },
          '50%': { transform: 'translateX(0) translateY(-5px)' },
          '100%': { transform: 'translateX(100%) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}