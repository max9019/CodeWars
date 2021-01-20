let str = 'mama ila ramu mamo';

function hasDuplicates(str) {
    if (typeof str !== 'string' || str.length === 0) return "not a string!";
    let result = str.toLowerCase().split(' ');
    result = result.filter(el => result.indexOf(el) !== result.lastIndexOf(el));
    return result.length > 0
}

console.log(hasDuplicates(str));