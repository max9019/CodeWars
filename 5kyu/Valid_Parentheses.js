/*
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
 */

function validParentheses(parens){
    let count1 = 0;
    let count2 = 0;
    parens = parens.split('');
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') count1++;
        if (parens[i] === ')' && count1 === count2) return false;
        if (parens[i] === ')' && count1 !== count2) count2++;
    }
    return count1 === count2;
}