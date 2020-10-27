import {parserToLoader} from '../utils/parser-to-loader.js'

import {parseYaml} from '../parser/yaml.js'
import {parseJson5} from '../parser/json5.js'
import {parseJson} from '../parser/json.js'
import {parseToml} from '../parser/toml.js'
import {parseIni} from '../parser/ini.js'

const parsers = {
    yaml: parseYaml,
    json5:parseJson5,
    json: parseJson,
    toml: parseToml,
    ini: parseIni,
  }
import {loadCjs} from './cjs.js'
// import esm from './esm'

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const ini = parserToLoader(parsers.ini)
const json = parserToLoader(parsers.json)
// const js = esm

yaml.defaultExtension = 'yaml'
json5.defaultExtension = 'json5'
toml.defaultExtension = 'toml'
ini.defaultExtension = 'ini'
json.defaultExtension = 'json'
// js.defaultExtension = 'js'

const all = [
    //esm,
     yaml, json5, toml,
    //  js,
    loadCjs, json, ini]

export {
    //esm,
     yaml, json5, toml,
    //  js,
    loadCjs as cjs, json, ini, all}
