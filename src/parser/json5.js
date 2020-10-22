import {parse} from 'json5'

function parseJson5(content /* , options */) {
  return parse(content)
}

export default parseJson5
