/*

https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3
most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle
fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty
array if a text contains no words.
 */

function topThreeWords(text) {
    text = text.split(' ').map(el => el.toLowerCase()).map(el => el.replace(/[.,\/#!$%\^&\*;:{}=\-_~(),]/g,"")).filter(el => el !== '').filter(el => el !== `'`);;
    let obj = {};
    text.forEach(el => el in obj ? obj[el]++ : obj[el] = 1);
    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return text.length === 0 ? [] :
        arr.length === 1 ? [arr[0][0]] :
            arr.length === 2 ? [arr[0][0], arr[1][0]] :
                [arr[0][0], arr[1][0], arr[2][0]]
}