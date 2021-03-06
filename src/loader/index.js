import {parserToLoader} from '../utils'
import * as parsers from '../parser'
import cjs from './cjs'
import esm from './esm'

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const ini = parserToLoader(parsers.ini)
const json = parserToLoader(parsers.json)
const js = esm

export {esm, yaml, json5, toml, js, cjs, json, ini}
