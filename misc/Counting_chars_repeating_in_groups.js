/*
input: "aaaabbbcca"
output:[['a', 4], ['b', 3], ['c', 2], ['a', 1]]

Write a function that converts the input to the output
 */

function countLetters(str) {
    let result = str.match(/(.)\1*/g).map(el => [el.charAt(0), el.length]);
    return result;
}