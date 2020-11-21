/*
https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e

Christmas is coming, and your task is to build a custom Christmas tree with the specified characters
and the specified height.

Inputs:
chars: the specified characters.
n: the specified height. A positive integer greater than 2.
Output:
A multiline string. Each line is separated by \n. A tree contains two parts: leaves and trunks.
The leaves should be n rows. The first row fill in 1 char, the second row fill in 3 chars, and so on.
A single space will be added between two adjust chars, and some of the necessary spaces will be added to the left side,
to keep the shape of the tree. No space need to be added to the right side.

The trunk should be at least 1 unit height, it depends on the value of the n.
The minimum value of n is 3, and the height of the tree trunk is 1 unit height.
If n increased by 3, and the tree trunk increased by 1 unit.
For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; and so on.
 */

function customChristmasTree(chars, n) {
    let len = 0;
    for (let i = 1; i <= n; i++) {
        len += i;
    }
    let toys = chars.repeat(len).slice(0, len);
    let tree = [];
    for (let i = 1; i <= n; i++) {
        let s = ' '.repeat(n-i) + toys.slice(0, i).split('').join(' ');
        tree.push(s);
        toys = toys.slice(i);
    }
    let height = Math.trunc(n/3);
    for (let i = 1; i <= height; i++) {
        tree.push(' '.repeat(n-1) + '|');
    }
    return tree.join('\n');
}