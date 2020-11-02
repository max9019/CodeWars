/*

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function high(x){
    let arr = x.split(' ');
    let totalScore = 0;
    let currentScore = 0;
    let winning = '';
    for (let i = 0; i < arr.length; i++) {
        currentScore = 0;
        for (let j = 0; j < arr[i].length; j++) {
            currentScore += arr[i].charCodeAt(j) - 96;
        } if (currentScore > totalScore) {winning = arr[i]
            totalScore = currentScore}
    } return winning;
}