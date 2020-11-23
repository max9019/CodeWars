/*
https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.
 */

function arrayLeaders(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let tempArr = numbers.slice(i + 1, numbers.length);
        let tempSum = tempArr.reduce((acc, curr) => acc + curr);
        if (numbers[i] > tempSum) {result.push(numbers[i]);}
    }
    if (numbers[numbers.length-1] > 0) {result.push(numbers[numbers.length-1]);}
    return result;
}