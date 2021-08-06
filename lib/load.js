import * as loaders from './loaders/index.js'
import {getFileType} from './utils/index.js'

async function load(file, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {type = getFileType(file) || 'yaml'} = {
    ...options,
  }

  return loaders[type](file, options)
}

export default load
