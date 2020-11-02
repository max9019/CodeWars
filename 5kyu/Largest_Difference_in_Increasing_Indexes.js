/*

https://www.codewars.com/kata/52503c77e5b972f21600000e

Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j]

 */

var largestDifference = function(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = data.length - 1; j >= i; j--) {
            if (data[j] >= data[i]) {result.push(j - i)
                break;}
        }
    } return Math.max(...result);
};