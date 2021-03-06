# fantasy-do
[![NPM version](http://img.shields.io/npm/v/fantasy-do.svg?style=flat-square)](https://www.npmjs.com/package/fantasy-do)
[![Build status](http://img.shields.io/travis/jwoudenberg/fantasy-do/master.svg?style=flat-square)](https://travis-ci.org/jwoudenberg/fantasy-do)
[![Dependencies](https://img.shields.io/david/jwoudenberg/fantasy-do.svg?style=flat-square)](https://david-dm.org/jwoudenberg/fantasy-do)

What is it? Take your pick:
- do notation for [fantasy-land](https://github.com/fantasyland/fantasy-land) javascript.
- [co](https://www.npmjs.com/package/co) for monads.
- async/await for chainables.

It allows you take take this code:

```js
const div = (b === 0) ? Nothing() : Just(a / b)
const result = div(8, 2)
  .map(a => a + 2)
  .chain(b => div(b, 2))
}
```

And write it like this:

```js
const mdo = require('fantasy-do')
const result = mdo(function * () {
  const a = yield div(8, 2)
  b = a + 2
  return div(b, 2)
})
```
