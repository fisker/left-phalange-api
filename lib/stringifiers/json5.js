import json5 from 'json5'

function stringifyJson5(data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  }
  return pretty ? json5.stringify(data, undefined, 2) : json5.stringify(data)
}

export default stringifyJson5
