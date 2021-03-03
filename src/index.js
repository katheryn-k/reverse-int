module.exports = function reverse (n) {
    n = Math.abs(n);
    let numToString = n.toString().split('');
    let reversedNum = numToString.reverse().join('');
    return Number(reversedNum);
}
