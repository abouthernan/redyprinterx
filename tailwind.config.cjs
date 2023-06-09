/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-320px*7))' }
        }
      },
      colors: {
        marino: '#2F455C',
        cielo: '#1DCDFE',
        turquesa: '#34F5C6',
        aguamarina: '#21D0B3',
        blanco: '#ebf4fc'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
