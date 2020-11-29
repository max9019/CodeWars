/*
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return
a list of the sums of its parts as defined above.
 */

function partsSums(ls) {
    let arr = [0];
    ls.reverse().forEach(el => arr.push(arr[arr.length-1] + el));
    return arr.reverse();
}