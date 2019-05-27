function jsonStringify(data, {pretty = false} = {}) {
  return pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
}

export default jsonStringify
