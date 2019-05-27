import * as parser from './parser'
import {getFileType} from './utils'

function parse(string, options = {}) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {type = getFileType(options.filename) || 'yaml'} = options

  return parser[type](string, options)
}

export default parse
