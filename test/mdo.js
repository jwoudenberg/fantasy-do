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

function div (a, b) {
  return (b === 0) ? Nothing() : Just(a / b)
}
