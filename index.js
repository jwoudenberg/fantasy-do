module.exports = mdo

function mdo (generatorFunction) {
  const generator = generatorFunction()
  const step = (nextValue) => {
    const { value, done } = generator.next(nextValue)
    // TODO: add a nice error for the case returned value is not a monad.
    return done ? value : value.chain(step)
  }
  return step()
}
