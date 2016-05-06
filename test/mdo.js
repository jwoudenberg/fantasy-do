import test from 'ava'
import { Just, Nothing } from 'sanctuary'
import mdo from '../'

test('happy flow', t => {
  const x = mdo(function * () {
    const a = yield div(8, 2)
    const b = a + 2
    return div(b, 2)
  })
  t.is(
    x.toString(),
    'Just(3)'
  )
})

test('yielding a non-monad throws', t => {
  t.throws(
    () => mdo(function * () {
      yield 42
    }),
    '[fantasy-do] yielded value is not a Monad: 42.'
  )
})

function div (a, b) {
  return (b === 0) ? Nothing() : Just(a / b)
}
