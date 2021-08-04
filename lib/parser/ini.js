import {decode} from 'ini'

function parseIni(content /* , options */) {
  return decode(String(content))
}

export default parseIni
