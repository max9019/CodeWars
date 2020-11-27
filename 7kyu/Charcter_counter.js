/*
https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript

You are going to be given a word. Your job will be to make sure that each character in that word
has the exact same number of occurrences. You will return true if it is valid, or false if it is not.
 */

function validateWord(s)
{
    s = s.toLowerCase().split('').sort();
    let count = s.lastIndexOf(s[0]) - s.indexOf(s[0]);
    return s.every(el => (s.lastIndexOf(el) - s.indexOf(el)) === count);
}
