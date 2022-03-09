module.exports = {
  //content: ["./config.toml", "./{content,layouts}/**/*.{html,css,md}"],
  content: ["./public/**/*.{html,css}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Lora", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
