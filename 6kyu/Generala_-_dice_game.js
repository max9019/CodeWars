/*
https://www.codewars.com/kata/5f70c55c40b1c90032847588/train/javascript

Complete the function that is given the rolled dice as a string of length 5 and return the points scored in that roll. You can safely assume that provided parameters will be valid:

String of length 5,
Each character will be a number between 1 and 6
 */

function points(dice) {
    dice = dice.split('').map(el => +el).sort((a, b) => a - b);
    if (dice.reduce((acc, curr) => acc + curr) / dice.length === dice[0]) {
        return 50;
    }
    if (dice.slice(0, 4).every(el => el === dice[0]) && dice[0] !== dice[4] || dice.slice(1, 5).every(el => el === dice[4]) && dice[0] !== dice[4]) {
        return 40;
    }
    if (dice.slice(0, 3).every(el => el === dice[0]) && dice[0] !== dice[4] && dice[3] === dice[4] || dice.slice(2, 5).every(el => el === dice[4]) && dice[4] !== dice[0] && dice[0] === dice[1]) {
        return 30;
    }
    if (dice.join('') === '13456' || dice.join('') === '12345' || dice.join('') === '23456') {
        return 20;
    }
    return 0
}