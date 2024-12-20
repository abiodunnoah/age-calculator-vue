// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        //  Add custom shadow value
        custom: "box-shadow: 1px 1px 5px 1px rgba(15, 14, 14, 0.349)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
