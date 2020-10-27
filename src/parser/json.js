import parse from 'parse-json'

function parseJson(content, options) {
  const {filename} = {
    filename: '',
    ...options,
  }
  return filename ? parse(content, filename) : parse(content)
}

export default parseJson
