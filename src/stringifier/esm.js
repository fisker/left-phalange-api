import json5Stringify from './json5'

function stringifyEsm(data, options) {
  return `export default ${json5Stringify(data, options)}`
}

export default stringifyEsm
