export { getFileType}
import {extname} from 'path'

const fileTypes = {
  '.mjs': 'esm',
  '.yml': 'yaml',
}

function getFileType(file) {
  const extension = extname(file)

  return fileTypes[extension] || extension.slice(1)
}

