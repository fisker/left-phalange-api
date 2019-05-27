import {parse} from '@iarna/toml'

function tomlParse(content, options) {
  return parse(content)
}

export default tomlParse
