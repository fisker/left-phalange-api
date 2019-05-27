import parseJson from 'parse-json'

function jsonParse(content, {filename = ''} = {}) {
  return filename ? parseJson(content, filename) : parseJson(content)
}

export default jsonParse
