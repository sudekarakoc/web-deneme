/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // App Router kullanıyorsanız
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",     // Pages Router kullanıyorsanız
    "./components/**/*.{js,ts,jsx,tsx,mdx}",// Ayrı bir components klasörünüz varsa
    
    // Eğer projeyi kurarken "src" dizini seçtiyseniz (Yukarıdakilere ek olarak veya tek başına):
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}