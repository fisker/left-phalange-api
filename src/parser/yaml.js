import {safeLoad} from 'js-yaml'

function parseYaml(content, options) {
  const {filename} = {
    filename: '',
    ...options,
  }
  return safeLoad(content, {filename})
}

export default parseYaml
