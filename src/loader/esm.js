import {wrap, interopDefault} from '../utils'

const esmRequire = require('esm')(module, {
  cjs: {
    cache: false,
    extensions: false,
    mutableNamespace: false,
    namedExports: false,
    vars: true,
  },
})

export default wrap(esmRequire, interopDefault)
