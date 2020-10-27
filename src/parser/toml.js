export {parseToml}
import {parse} from '@iarna/toml'

function parseToml(content /* , options */) {
  return parse(content)
}

