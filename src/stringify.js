import * as stringifier from './stringifier'

function stringify(data, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  const {type = 'json'} = options

  return stringifier[type](data, options)
}

export default stringify
