import {parserToLoader} from '../utils/index.js'
import * as parsers from '../parsers/index.js'
import cjs from './cjs.js'
import esm from './esm.js'

const yaml = parserToLoader(parsers.yaml)
const json5 = parserToLoader(parsers.json5)
const toml = parserToLoader(parsers.toml)
const ini = parserToLoader(parsers.ini)
const json = parserToLoader(parsers.json)
const csv = parserToLoader(parsers.csv)
const js = async (...arguments_) => {
  try {
    await esm(...arguments_)
  } catch (esmLoadError) {
    try {
      await cjs(...arguments_)
    } catch {
      throw esmLoadError
    }
  }
}

export {yaml, json5, toml, js, json, ini, csv}
export {default as cjs} from './cjs.js'
export {default as esm} from './esm.js'
