export {parseYaml}
import pkg from 'js-yaml';
const {safeLoad} = pkg;

function parseYaml(content, options) {
  const {filename} = {
    filename: '',
    ...options,
  }
  return safeLoad(content, {filename})
}

