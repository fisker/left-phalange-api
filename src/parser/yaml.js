import {safeLoad} from 'js-yaml'

function yamlParse(content, {filename = ''} = {}) {
  return safeLoad(content, {filename})
}

export default yamlParse
