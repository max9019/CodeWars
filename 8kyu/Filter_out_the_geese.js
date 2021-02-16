/*
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/solutions/javascript/following/best_practice

Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a
filtered array containing the same elements but with the 'geese' removed.
 */

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(el => geese.every(elm => elm !== el ));
};