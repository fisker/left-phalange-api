import * as stringifier from './stringifier'

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

  const {type} = {
    type: 'json',
    ...options,
  }

  return stringifier[type](data, options)
}

export default stringify
