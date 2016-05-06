module.exports = mdo

function mdo (generatorFunction) {
  const generator = generatorFunction()
  const step = (nextValue) => {
    const result = generator.next(nextValue)
    const value = result.value
    const done = result.done
    if (!value || typeof value.chain !== 'function') {
      const action = done ? 'returned' : 'yielded'
      throw new Error(`[fantasy-do] ${action} value is not a Monad: ${result.value}.`)
    }
    return done ? value : value.chain(step)
  }
  return step()
}
