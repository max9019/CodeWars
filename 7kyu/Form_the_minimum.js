/*
https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

Given a list of digits, return the smallest number that could be formed from these digits,
using the digits only once (ignore duplicates).
 */

function minValue(values){
    return +values.filter((el, i) => i === values.lastIndexOf(el)).sort().join('');
}