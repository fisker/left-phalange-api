export {stringifyYaml}
import pkg from 'js-yaml';
const {safeDump} = pkg;

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

