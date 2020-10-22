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

function loadEsm(file /* , options */) {
  const module = esmRequire(file)
  return module.default ? module.default : module
}

module.exports = loadEsm
