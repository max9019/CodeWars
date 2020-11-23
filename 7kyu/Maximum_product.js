/*
https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .
 */

function adjacentElementsProduct(array) {
    let result = array.map((el, i) => el = el * array[i + 1]);
    result.pop();
    return Math.max(...result);
}