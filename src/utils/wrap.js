function wrap(func, wrapper) {
  return function wrapped(...arguments_) {
    return wrapper(func(...arguments_))
  }
}

export default wrap
