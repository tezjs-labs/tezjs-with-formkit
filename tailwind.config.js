module.exports = {
  content: [
    __dirname + "/components/**/*.{vue,js,ts,jsx,tsx}",
    __dirname + "/pages/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
