import * as loader from './loader/index.js'
import {getFileType} from './utils/index.js'

function load(file, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {type = getFileType(file) || 'yaml'} = {
    ...options,
  }

  return loader[type](file, options)
}

export default load
