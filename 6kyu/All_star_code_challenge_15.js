/*
https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

Create a function named rotate() that accepts a string argument and returns an array of strings with each letter
from the input string being rotated to the end.
 */

function rotate(str){
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        str = str.slice(1) + str[0];
        arr.push(str);
    }
    return arr;
}