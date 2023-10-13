/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: ['var(--font-acorn)'],
      regular: ['var(--font-gtplanar)'],
    },
    extend: {
      colors: {
        headingc: "#8fdcc2",
        paragraphc: "#f0fdf4cc",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
