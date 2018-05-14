const add = require('./add')
const minus = require('./minus')

const operators = {
    plus: add,
    minus: minus
}

module.exports = (operator, a, b) => {
    const fn = operators[operator]
    return fn(a, b)
}