import {safeDump} from 'js-yaml'

function yamlStringify(data, {pretty = false, sort = false} = {}) {
  const options = {
    noArrayIndent: !pretty,
    sortKeys: sort,
    lineWidth: pretty ? 80 : -1,
  }

  return safeDump(data, options)
}

export default yamlStringify
