import {parse} from '@iarna/toml'

function parseToml(content /* , options */) {
  return parse(content)
}

export default parseToml
