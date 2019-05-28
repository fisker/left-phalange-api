import {sync as temporaryWrite} from 'temp-write'
import {load} from '../../src'

function loadFileFromString(string, fileName, options) {
  const file = temporaryWrite(string, fileName)
  return load(file, options)
}

export default loadFileFromString
