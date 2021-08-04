import * as parser from './parser/index.js'
import {getFileType} from './utils/index.js'

function parse(string, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {filename, type = (filename ? getFileType(filename) : '') || 'yaml'} = {
    ...options,
  }

  return parser[type](string, options)
}

export default parse
