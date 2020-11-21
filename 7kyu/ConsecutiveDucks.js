/*
https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f/train/javascript

Positive integers have so many gorgeous features.
Some of them could be expressed as a sum of two or more consecutive positive numbers.
 */

function consecutiveDucks(num) {
    return !Number.isInteger( Math.log2(num));
}