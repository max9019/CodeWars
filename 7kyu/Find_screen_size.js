/*
https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

Given an integer width and a string ratio written as WIDTH:HEIGHT,
output the screen dimensions as a string written as WIDTHxHEIGHT.
 */

function findScreenHeight(width, ratio) {
    return `${width}x${width / +ratio.substring(ratio[-1], ratio.indexOf(":")) * +ratio[ratio.length-1]}`;
}