/*
https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values
so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.


 */

function solve(arr){
    arr = arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length / 2; i++) {
        result.push(arr[arr.length-i-1]);
        result.push(arr[i]);
    }
    if (arr.length % 2 !== 0) {result.pop();}
    return result;
};
