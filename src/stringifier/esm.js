export {stringifyEsm}
import {stringifyJson5} from './json5.js'

function stringifyEsm(data, options) {
  return `export default ${stringifyJson5(data, options)};`
}

