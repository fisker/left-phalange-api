import path from 'path'

const fileTypes = {
  '.mjs': 'esm',
  '.yml': 'yaml',
}

function getFileType(file) {
  const extension = path.extname(file)

  return fileTypes[extension] || extension.slice(1)
}

export default getFileType
