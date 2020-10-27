import {safeDump} from 'js-yaml'

function stringifyYaml(data, options) {
  const {pretty, sort} = {
    pretty: false,
    sort: false,
    ...options,
  }

  return safeDump(data, {
    noArrayIndent: !pretty,
    sortKeys: sort,
    lineWidth: pretty ? 80 : -1,
  })
}

export default stringifyYaml
