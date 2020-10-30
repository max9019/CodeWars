/*

https://www.codewars.com/kata/52efefcbcdf57161d4000091

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 */

function count (string) {
    let arr = string.split('');
    var counts = {}, i, value;
    for (i = 0; i < arr.length; i++) {
        value = arr[i];
        if (typeof counts[value] === "undefined") {
            counts[value] = 1;
        } else {
            counts[value]++;
        }
    }
    return counts;
}