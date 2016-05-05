module.exports = mdo

function mdo (generatorFunction) {
  const generator = generatorFunction()
  const step = (nextValue) => {
    const result = generator.next(nextValue)
    // TODO: add a nice error for the case returned value is not a monad.
    return result.done ? result.value : result.value.chain(step)
  }
  return step()
}
