/*
https://www.codewars.com/kata/5e4217e476126b000170489b/train/javascript

Return true if it is, and false if it isn't.

Note: All inputs will be valid numbers between 0 and 2^53-1 (9,007,199,254,740,991) (inclusive).
Note: All single digit numbers (including 0) are trivially polydivisible.
Note: Except for 0, no numbers will start with 0.
 */

function polydivisible(x) {
    let arr = x.toString().split('');
    let str = '';
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        result.push(+str / (i + 1));
    }
    return result.every(el => el === Math.round(el));
}