/*
https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript

Write

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.
 */

function encode(str) {
    function swap(letter) {
        letter = letter.toLowerCase();
        return /[a-z]/.test(letter)? letter.charCodeAt(0) - 96 : letter;
    }
    return str.replace(/./g, swap);
}