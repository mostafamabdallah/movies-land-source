module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    Screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary:'#b20710',
        secondary:"#4e4e4e",
        Lightgray:'#bcbcbc'
      },
    },
  },
  plugins: [],
};
