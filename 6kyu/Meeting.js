/*
https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result
between parentheses separated by a comma.


 */

function meeting(s) {
    s = s.toUpperCase();
    let arr = s.split(';').map(el => el.replace(':', ' '));
    function compareFirst(a, b){
        a = a.split(' ')[0];
        b = b.split(' ')[0];
        return a > b ? 1 : -1;
    }
    let lastNames = arr.map(el => el.split(' ')[1]);
    lastNames = lastNames.filter((el, i) => i === lastNames.lastIndexOf(el)).sort();
    let result = '';
    for (let i = 0; i < lastNames.length; i++) {
        let tempArr = arr.filter(el => el.split(' ')[1] === lastNames[i]);
        tempArr.sort(compareFirst);
        for (let j = 0; j < tempArr.length; j++) {
            result += `(${tempArr[j].split(' ')[1]}, ${tempArr[j].split(' ')[0]})`;
        }
    }
    return result;
}

function meeting(s){
    s = s.replace(/:/g, ';').toUpperCase().split(';')
    let res = [];
    for (let i = 1; i < s.length; i += 2){
        res.push(`(${s[i]}, ${s[i-1]})`);
    }
    return res.sort().join('');
}