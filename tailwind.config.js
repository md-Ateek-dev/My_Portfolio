// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // जरूरी है
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Custom name
        sans: ['Poppins', 'sans-serif'],    // Tailwind की default sans को override कर दिया
      },
    },
  },
  plugins: [],
}
