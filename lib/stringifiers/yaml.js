import {dump} from 'js-yaml'

function stringifyYaml(data, options) {
  const {pretty, sort} = {
    pretty: false,
    sort: false,
    ...options,
  }

  return dump(data, {
    noArrayIndent: !pretty,
    sortKeys: sort,
    lineWidth: pretty ? 80 : -1,
  })
}

export default stringifyYaml
