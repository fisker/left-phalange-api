import json5Stringify from './json5.js'

function stringifyEsm(data, options) {
  return `export default ${json5Stringify(data, options)};`
}

export default stringifyEsm
