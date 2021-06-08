const Try = require("./Try")
const {test1, test2} = Try

test('if money 300', () => {
    expect(test1(300)).toBe('VIP')
})
test('if money 300', () => {
    expect(test2(300)).toBe('one')
})