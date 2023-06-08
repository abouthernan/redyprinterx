/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
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
