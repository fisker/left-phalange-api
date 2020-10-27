export {stringifyToml}
import {stringify} from '@iarna/toml'

function stringifyToml(data /* , options */) {
  return stringify(data)
}

