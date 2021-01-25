/*
https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.
 */

function zipWith(fn,a0,a1) {
    let result = [];
    for (let i = 0; i < Math.min(...[a0.length, a1.length]); i++) {
        result.push(fn(a0[i], a1[i]));
    }
    return result;
}