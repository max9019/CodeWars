/*
https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript
Given a string of words and numbers. Extract the expression including:

the operator: either addition or subtraction
the two numbers that we are operating on
Return the result of the calculation.
 */

function calculate(string) {
    let arr = string.split(' ');
    return arr[5]  === "loses" ? +arr[2] - +arr[6] : +arr[2] + +arr[6];
}