/*
https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed
to make the contents of arr consecutive from the lowest number to the highest number.
 */

function consecutive(arr) {
    let count = 0;
    let leftOvers = arr.sort((a, b) => a - b).slice(1, arr.length - 1);
    for (let i = Math.min(...arr) + 1; i < Math.max(...arr); i++) {
        if (!leftOvers.includes(i)) {
            count++
        }
    }
    return count;
}