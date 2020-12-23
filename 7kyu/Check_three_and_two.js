/*
https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran),
check if the array contains three and two of the same values.
 */

function checkThreeAndTwo(array) {
    let a = array.filter(el => el === 'a').length;
    let b = array.filter(el => el === 'b').length;
    let c = array.filter(el => el === 'c').length;
    return ((a === 3 || b===3 || c === 3) && (a === 2 || b=== 2 || c === 2));
}

