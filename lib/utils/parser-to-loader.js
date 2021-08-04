import {promises as readFile} from 'node:fs'

function parserToLoader(parser) {
  return async function loader(filename, options) {
    const content = await readFile(filename, 'utf8')

    return parser(content, {
      filename,
      ...options,
    })
  }
}

export default parserToLoader
