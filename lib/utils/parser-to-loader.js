import {promises as fs} from 'node:fs'

function parserToLoader(parser) {
  return async function loader(filename, options) {
    const content = await fs.readFile(filename, 'utf8')

    return parser(content, {
      filename,
      ...options,
    })
  }
}

export default parserToLoader
