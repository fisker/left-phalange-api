import {readFileSync} from 'fs'

function parserToLoader(parser) {
  return function loader(filename, options = {}) {
    const content = readFileSync(filename, 'utf8')

    return parser(content, {
      filename,
      ...options,
    })
  }
}

export default parserToLoader
