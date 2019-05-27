import json5Stringify from './json5'
import {wrap} from '../utils'

export default wrap(json5Stringify, string => `module.exports = ${string};`)
