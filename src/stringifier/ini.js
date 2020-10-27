export {stringifyIni}
import {encode} from 'ini'

function stringifyIni(data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  }
  return encode(data, {
    whitespace: pretty,
  })
}

