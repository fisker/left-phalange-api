import * as parsers from './parsers/index.js'
import {getFileType} from './utils/index.js'

async function parse(string, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {filename, type = (filename ? getFileType(filename) : '') || 'yaml'} = {
    ...options,
  }

  return parsers[type](string, options)
}

export default parse
