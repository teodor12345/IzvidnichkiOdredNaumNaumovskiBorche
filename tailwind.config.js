module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      phoneSmall: '320px',
      phone: '360px',
      phoneLarge: '411px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xlSpecial: '1430px',
      '2xl': '1536px',
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
