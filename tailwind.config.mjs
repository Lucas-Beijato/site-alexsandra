/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js',],
  darkMode: "class",
  theme: {
    fontFamily: {
      "halimum": "Halimum",
      "glacial-indifference": "Glacial Indifference",
      "poppins": "Poppins",
    },
    extend: {
      width: {
        'screen-content-limit': '1280px'
      },
      colors: {
        'dark-brown': '#2b1511',
        'medium-brown': '#62300a',
        'light-brown': '#8c5e39',
        'cream': '#f6f3ee',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};