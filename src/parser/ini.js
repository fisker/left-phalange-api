import {decode} from 'ini'

function iniParse(content, options) {
  return decode(String(content))
}

export default iniParse
