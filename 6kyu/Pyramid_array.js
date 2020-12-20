/*
https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
 */

function pyramid(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let arr = new Array(i).fill(1)
        result.push(arr);
    }
    return result;
}