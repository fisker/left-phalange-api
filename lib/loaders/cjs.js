import importFresh from 'import-fresh'

async function loadCjs(file /* , options */) {
  return importFresh(file)
}

export default loadCjs
