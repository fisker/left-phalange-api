import importFresh from 'import-fresh'

function loadCjs(file /* , options */) {
  return importFresh(file)
}

export default loadCjs
