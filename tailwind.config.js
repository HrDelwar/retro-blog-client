module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        brand: "url('/src/images/bg-brand.jpg')",
      }),
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1}
        },
      },
      animation: {
        fadeIn: "fadeIn 1s linear",
      },
      fontFamily: {
        'Roboto': ['Roboto, sans-serif']
      },
      zIndex: {

        'high': '9999',
       }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
};
