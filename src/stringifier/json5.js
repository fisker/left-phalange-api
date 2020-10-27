import {stringify} from 'json5'

function stringifyJson5(data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  }
  return pretty ? stringify(data, undefined, 2) : stringify(data)
}

export default stringifyJson5
