/*
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is
not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't',
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character,
but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
 */

function firstNonRepeatingLetter(s) {
    let s1 = Array.from(s.toLowerCase());
    console.log(s1);
    for (let i = 0; i < s1.length; i++) {
        if ((s1.lastIndexOf(s1[i]) - s1.indexOf(s1[i])) === 0) {
            return s[i];
        }
    }
    return "";
}