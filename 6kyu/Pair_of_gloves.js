/*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

Winter is coming, you must prepare your ski holidays.
The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have
in your drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pair you can constitute.

You must not change the input array.

 */

function numberOfPairs(gloves)
{
    let obj = {};
    gloves.map(el => el in obj ? obj[el]++ : obj[el] = 1);
    let result = 0;
    let arr = Object.entries(obj);
    for (let key in arr) {
        if (arr[key][1] % 2 === 0) {result += arr[key][1] / 2;}
        if (arr[key][1] % 2 !== 0 && arr[key][1] >= 3) {result += (arr[key][1] - 1) / 2}
    }
    return result;
}