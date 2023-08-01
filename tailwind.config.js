/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'socialBG': "url('/social_bg_img.png')",
      },
      fontFamily: {
        saira: ['Saira Semi Condensed', 'sans-serif'],
        headingFont:['Dai Banna SIL', 'serif'],
        initiative:['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
