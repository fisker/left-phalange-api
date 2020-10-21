import {sync as temporaryWrite} from 'temp-write'
import {parse as parsePath, format as formatPath} from 'path'
import {load} from '../../src'

function loadFileFromStringExtensionLess(string, fileName, options) {
  const file = temporaryWrite(string, fileName)
  // remove extension
  const parsed = parsePath(file)
  parsed.ext = ''
  const extensionLess = formatPath(parsed)
  console.log(extensionLess);
  return load(extensionLess, options)
}

export default loadFileFromStringExtensionLess
