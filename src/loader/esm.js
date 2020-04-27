// Rollup can't bundle this, if write in ES Module

const esm = require('esm')
const {wrap, interopDefault} = require('../utils')

const esmRequire = esm(module, {
  cjs: {
    cache: false,
    extensions: false,
    mutableNamespace: false,
    namedExports: false,
    vars: true,
  },
})

module.exports = wrap(esmRequire, interopDefault)
