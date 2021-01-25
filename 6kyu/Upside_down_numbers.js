/*
https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript

Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same.
To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because
there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.
 */

function solve(x, y) {
    function mirror(elm) {
        return elm === '1' ? '1' : elm === '6' ? '9' : elm === '8' ? '8' : elm === '9' ? '6' : elm === '0' ? '0' : 'a';
    }
    let count = 0;
    for (let i = x; i < y; i++) {
        if (i === +i.toString().split('').map(el => mirror(el)).reverse().join('')) count++;
    }
    return count;
}