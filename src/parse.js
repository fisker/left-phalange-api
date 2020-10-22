import * as parser from './parser'
import {getFileType} from './utils'

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
