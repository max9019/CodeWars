/*
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
 */


function cleanString(s) {
    let arr = s.split('');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "#") {arr2.push(arr[i])}
        if (arr[i] === "#") {arr2.pop()}
    } return arr2.join('');
};