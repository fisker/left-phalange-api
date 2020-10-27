export {loadCjs}
import importFresh from 'import-fresh'

function loadCjs(file /* , options */) {
  return importFresh(file)
}

