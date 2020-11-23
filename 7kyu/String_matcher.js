/*
https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/train/javascript

isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

!Spaces will be ignored but special characters and numbers won't match the string and return false.

For example:
isMatching("email box", "b aIl", "Mo x e") return true
but
isMatching("bouh", "0b", "uh") return false

You need to be able to use all the characters from the two strings so:
isMatching("kata", "kt", "aaa") return false
 */

function isMatching(string, str1, str2) {
    let str = '';
    return str.concat(str1, str2).replace(/\s/g, '').toLowerCase().split('').sort().join('') === string.replace(/\s/g, '').toLowerCase().split('').sort().join('');
}
