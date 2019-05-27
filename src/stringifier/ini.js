import {encode} from 'ini'

function iniStringify(data, {pretty = false} = {}) {
  return encode(data, {
    whitespace: pretty,
  })
}

export default iniStringify
