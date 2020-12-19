/*
https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

In this kata, you've to count lowercase letters in a given string and return the letter count in a
hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby
and 'char' instead of string in Crystal.
 */

function letterCount(s){
    let obj = {};
    for (let letter of s) {
        if (obj[letter]) { obj[letter]++
        } else {obj[letter] = 1;
        }
    }
    return obj;
}