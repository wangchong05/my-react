const test1 = (money) => {
    return money >= 200?'VIP':'Normal'
}
const test2 = (money) => {
    return money >= 1000?'two':'one'
}
module.exports = {
    test1, test2
}