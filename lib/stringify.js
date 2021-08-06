import * as stringifiers from './stringifiers/index.js'

async function stringify(data, options) {
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

  return stringifiers[type](data, options)
}

export default stringify
