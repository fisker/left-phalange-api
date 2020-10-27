
export {stringify}

import {stringifyYaml} from './stringifier/yaml.js'
import {stringifyJson5} from './stringifier/json5.js'
import {stringifyJson} from './stringifier/json.js'
import {stringifyToml} from './stringifier/toml.js'
import {stringifyIni} from './stringifier/ini.js'
import {stringifyCjs} from './stringifier/cjs.js'
import {stringifyEsm} from './stringifier/esm.js'
import {getFileType} from './utils/get-file-type.js'

const stringifier = {
  yaml: stringifyYaml,
  json5: stringifyJson5,
  json: stringifyJson,
  toml: stringifyToml,
  ini: stringifyIni,
  cjs: stringifyCjs,
  esm: stringifyEsm,
}

function stringify(data, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  if (typeof options === 'boolean') {
    options = {
      pretty: options,
    }
  }

  const {type} = {
    type: 'json',
    ...options,
  }

  return stringifier[type](data, options)
}

