const calc = require('../../../src/calc')

test('calc test add', () => {
    expect(calc('plus', 1, 1)).toBe(2)
})