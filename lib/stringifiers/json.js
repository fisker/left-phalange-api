function stringifyJson(data, options) {
  const {pretty} = {
    pretty: false,
    ...options,
  }
  return pretty ? JSON.stringify(data, undefined, 2) : JSON.stringify(data)
}

export default stringifyJson
