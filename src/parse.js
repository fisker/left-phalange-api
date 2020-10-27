
export { parse }
import {parseYaml} from './parser/yaml.js'
import {parseJson5} from './parser/json5.js'
import {parseJson} from './parser/json.js'
import {parseToml} from './parser/toml.js'
import {parseIni} from './parser/ini.js'
import {getFileType} from './utils/get-file-type.js'

const parser = {
  yaml: parseYaml,
  json5:parseJson5,
  json: parseJson,
  toml: parseToml,
  ini: parseIni,
}

function parse(string, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {filename, type = (filename ? getFileType(filename) : '') || 'yaml'} = {
    ...options,
  }

  return parser[type](string, options)
}
