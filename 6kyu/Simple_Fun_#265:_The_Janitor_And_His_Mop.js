/*
https://www.codewars.com/kata/59128363e5bc24091a00006f/train/javascript

In one city it is allowed to write words on the buildings walls. The local janitor, however, doesn't approve of it at all. Every night he vandalizes the writings by erasing all occurrences of some letter. Since the janitor is quite lazy, he wants to do this with just one swipe of his mop.

Given a word, find the minimum width of the mop required to erase each of the letters.
 */

function theJanitor(word) {
    let result = new Array(26).fill(0);
    let letters = word.split('').filter((el, i) => i === word.indexOf(el));
    for (let el of word) {
        result.splice(el.charCodeAt()-97, 1, word.lastIndexOf(el)-word.indexOf(el)+1);
    }
    return result;
}

function theJanitor(word) {
    let arr = [];
    for (let i = 97; i < 123; i++) {
        if (word.includes(String.fromCharCode(i))) arr.push(word.lastIndexOf(String.fromCharCode(i)) - word.indexOf(String.fromCharCode(i)) + 1);
        else {arr.push(0)}
    }
    return arr;
}