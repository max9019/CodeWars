/*
https://www.codewars.com/kata/59c3e819d751df54e9000098/train/javascript

I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:

The items and the key will be either an integer or a string
If the key does not appear in the items, return 0

 */

function getConsectiveItems(items, key){
    return Math.max(...(items.toString().split('').map(el => el === key.toString() ? el : el = '-')
        .join('').split('-').map(el => el.length)));
}