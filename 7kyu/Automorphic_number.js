/*
https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

 */

function automorphic(n){
    let arr = n.toString().split('');
    let n2 = n * n;
    let arr2 = n2.toString().split('');
    arr2 = arr2.slice(-arr.length, arr2.length);
    return +arr2.join('') === n ? "Automorphic" : "Not!!";
}

function automorphic(n){
    return (n * n).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}