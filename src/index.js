module.exports = function reverse (n) {
    let number = 0;
    if (n < 0) {
        number -= n;
    } else {
        number += n;
    }

    let str = '' + number;

    let arrayStr = [];

    for(let i = 0; i < str.length; i++) {
        arrayStr.unshift(str[i]);
    }

    return Number(arrayStr.join(''));
}
