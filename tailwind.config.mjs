/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
        'loop-scroll-mobile': 'loop-scroll 10s linear infinite'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
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
