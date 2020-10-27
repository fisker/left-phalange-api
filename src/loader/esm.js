// Rollup can't bundle this, if write in ES Module

const esm = require('esm')

const esmRequire = esm(module, {
  cjs: {
    cache: false,
    extensions: false,
    mutableNamespace: false,
    namedExports: false,
    vars: true,
  },
})

function interopDefault(module) {
  if (typeof module === 'object' && 'default' in module) {
    return module.default
  }

  return module
}

function loadEsm(file /* , options */) {
  return interopDefault(esmRequire(file))
}

module.exports = loadEsm
