import * as stringifier from './stringifier'

function stringify(data, type, options) {
  return stringifier[type](data, options)
}

export default stringify
