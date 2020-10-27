export {parseJson5}
import pkg from 'json5';
const {parse} = pkg;

function parseJson5(content /* , options */) {
  return parse(content)
}

