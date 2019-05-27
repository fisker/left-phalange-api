import * as loader from './loader'
import {getFileType} from './utils'

function load(file, type) {
  type = type || getFileType(file)
  return loader[type](file)
}

export default load
