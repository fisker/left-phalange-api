import temporaryWrite from 'temp-write'
import {load} from '../../lib/index.js'

function loadFileFromString(string, fileName, options) {
  const file = temporaryWrite.sync(string, fileName)
  return load(file, options)
}

export default loadFileFromString
