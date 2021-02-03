/*
https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

Write a function that takes an array and counts the number of each unique element present.
 */

function count(array){
    let obj = {};
    array.forEach(el => el in obj ? obj[el]++ : obj[el] = 1);
    let arr = Object.entries(obj);
    let result = {};
    for (let key in arr) {
        result[arr[key][0]] = arr[key][1];
    }
    return result;
}