let str = 'mama';

function vowelsCount(str) {
    if (typeof str !== 'string' || str.length === 0) return "not a string!";
    let arr = str.toLowerCase().split("");
    let result = {};
    arr.forEach(el => el in result ? result[el]++ : result[el] = 1);
    return result;
}

console.log(vowelsCount(str));