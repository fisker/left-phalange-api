export {stringifyJson5}
import pkg from 'json5';
const {stringify} = pkg;

function stringifyJson5(data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  }
  return pretty ? stringify(data, undefined, 2) : stringify(data)
}

