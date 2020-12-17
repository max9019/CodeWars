/*
https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

Given two numbers and an arithmetic operator (the name of it, as a string),
return the result of the two numbers having that operator used on them.
 */

function arithmetic(a, b, operator){
    return {
        add: (a + b),
        subtract: (a - b),
        multiply: (a * b),
        divide: (a / b),
    } [operator];
}