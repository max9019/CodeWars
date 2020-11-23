/*
https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

Given two arrays of strings, return the number of times each string of the second array appears in the first array.
 */

function solve(a,b){
    let result = b.map(el => el = 0);
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (b[i] === a[j]) {result[i]++;}
        }
    }
    return result;
}

/////

function solve(a,b){
    return b.map(x => a.filter(n => n === x).length);
}