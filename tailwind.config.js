
const { filterTokensByType } = require("./fns");
const tokens = require("./output/light.json")

const colors = filterTokensByType('color', tokens)

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
  },
  variants: {},
  plugins: [],
}
