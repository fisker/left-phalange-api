export {stringifyCjs}
import {stringifyJson5} from './json5.js'

function stringifyCjs(data, options) {
  return `module.exports = ${stringifyJson5(data, options)};`
}

