import {load} from 'js-yaml'

function parseYaml(content, options) {
  const {filename} = {
    filename: '',
    ...options,
  }
  return load(content, {filename})
}

export default parseYaml
