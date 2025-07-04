/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          'black': '#18181b',
          'red': '#dc2626',
          'red-dark': '#3b0a0a',
          'white': '#f9fafb',
          'gray': '#f3f4f6',
          'dark-gray': '#23272f',
        }
      },
      maxWidth: {
        '90': '90%',
        '95': '95%'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a,rgb(45, 43, 5))',
      }
    },
  },
  plugins: [],
} 