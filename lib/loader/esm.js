import {pathToFileURL} from 'url'

function interopDefault(module) {
  if (typeof module === 'object' && 'default' in module) {
    return module.default
  }

  return module
}

async function loadEsm(file /* , options */) {
  return interopDefault(await import(pathToFileURL(file)))
}

export default loadEsm
