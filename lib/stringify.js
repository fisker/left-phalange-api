import * as stringifier from './stringifier/index.js'

function stringify(data, options) {
  if (typeof options === 'string') {
    options = {
      type: options,
    }
  }

  if (typeof options === 'boolean') {
    options = {
      pretty: options,
    }
  }

  const {type = 'json'} = {
    ...options,
  }

  return stringifier[type](data, options)
}

export default stringify
