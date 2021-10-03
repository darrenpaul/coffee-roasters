module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "app-blue-300": "#83888f",
        "app-blue-500": "#333d4b",
        "app-orange-100": "#fefcf7",
        "app-green-400": "#0e8784",
        "app-yellow-200": "#fdd6ba",
        "app-yellow-150": "#f4f1eb",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Barlow", "sans-serif"],
        body: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
