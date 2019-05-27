import {parse} from 'json5'

function json5Parse(content, options) {
  return parse(content)
}

export default json5Parse
