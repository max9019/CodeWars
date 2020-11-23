/*
https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript

In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
More examples in test cases.
 */

function solve(arr) {
    arr.reverse();
    console.log(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i - 1].includes("Left")) {arr[i] = `Right ${arr[i].substring(arr[i].indexOf("on"), arr[i].length)}`;}
        if (arr[i - 1].includes("Right")) {arr[i] = `Left ${arr[i].substring(arr[i].indexOf("on"), arr[i].length)}`;}
    }
    arr[0] = arr[0].replace("Left", "Begin").replace("Right", "Begin");
    return arr;
}