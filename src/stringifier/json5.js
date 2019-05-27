import {stringify} from 'json5'

function json5Stringify(data, {pretty = false} = {}) {
  return pretty ? stringify(data, null, 2) : stringify(data)
}

export default json5Stringify
