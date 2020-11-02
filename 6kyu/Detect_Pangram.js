/*

https://www.codewars.com/kata/545cedaa9943f7fe7b000048

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

 */

function isPangram(string){
    let arr = string.toLowerCase().split('').filter(char => char !== ' ' && char !== "." && char !== ",").sort();
    arr = arr.filter((el, index) => arr.indexOf(el) === index).filter(el => isNaN(el));
    if (arr.length < 26) return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== String.fromCharCode(97 + i)) return false;
    } return true
}