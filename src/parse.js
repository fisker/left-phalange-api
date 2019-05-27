import * as parser from './parser'
import {getFileType} from './utils'

function parse(string, type, options = {}) {
  if (typeof type === 'object') {
    options = type
    type = ''
  }

  if (!type && options && options.filename) {
    type = getFileType(options.filename)
  }

  return parser[type](string, options)
}

export default parse
