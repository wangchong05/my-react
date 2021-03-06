test('test 007 toBe', () => {
    expect('007').toBe('007')
})
test('test 008 toEqual', () => {
    const a = {num: '008'}
    // expect(a).toBe({num: '008'})// 失败
    expect(a).toEqual({num: '008'})// 正确值的匹配
})
test('test 009 toBeNull', () => {
    const a = null
    expect(a).toBeNull()
})
test('test 010 toBeUndefined', () => {
    const a = undefined
    expect(a).toBeUndefined()
})
test('test 011 toBeDefined', () => {
    const a = null
    expect(a).toBeDefined()// 只要定义了就可以通过s
})
test('test 012 toBeFalsy', () => {
    const a = false
    expect(a).toBeFalsy()
})
test('test 013 toBeGreaterThan', () => {
    const a = 11
    expect(a).toBeGreaterThan(6)
})
test('test 014 toMatch', () => {
    const a = 'as,bn,kl'
    expect(a).toMatch(',kl')
})
test('test 015 toContain', () => {
    const a = ['a', 'b', 'c']
    expect(a).toContain('b')
})

const throNewErrorFun = () => {
    throw new Error('this is error')
}
test('test 016 toThrow', () => {
    expect(throNewErrorFun).not.toThrow('this is error1111111')
})