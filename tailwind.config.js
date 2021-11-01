
const { filterTokensByType } = require("./fns");
const tokens = require("./output/light.json")

const colors = filterTokensByType('color', tokens)

console.log("Colors", colors);

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors,
  },
  variants: {},
  plugins: [],
}
