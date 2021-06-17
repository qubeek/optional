const assert = require('assert')
const optional = require('..')

let target = null

assert.strictEqual(
    optional(target).prop,
    null
)

target = { foo: 'bar' }

assert.deepStrictEqual(
    optional(target),
    { foo: 'bar' }
)

assert.deepStrictEqual(
    optional(target).foo,
    'bar'
)
