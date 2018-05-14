const calc = require('../../src/calc')

console.log(process.env.HOST)

jest.mock('../../src/add', () => {
    return jest.fn((a, b) => a + b + 2)
})

test('calc test add', () => {
    expect(calc('plus', 1, 1)).toBe(2)
})