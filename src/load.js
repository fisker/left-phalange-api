import * as loader from './loader'
import {getFileType} from './utils'

function load(file, options = {}) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {type = getFileType(file) || 'yaml'} = options

  return loader[type](file)
}

export default load
