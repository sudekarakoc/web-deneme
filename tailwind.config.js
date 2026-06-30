module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F2D52"
      }
    },
  },
  plugins: [],

    theme: {
    extend: {
      fontFamily: {
        // 'sans' varsayılan font grubudur. Onu SF Pro yapıyoruz.
        sans: ['var(--font-sf-pro)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}