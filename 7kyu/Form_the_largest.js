/*
https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/train/javascript

Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
 */

function maxNumber(n){
    return +n.toString().split('').sort().reverse().join('');
}
