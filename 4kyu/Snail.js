/*

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 */

snail = function(array) {
    let result = [];
    while (array.length > 1) {
        array[0].map(el => result.push(el));
        array.splice(0, 1);
        array.map(el => {result.push(el[el.length - 1]), el.splice(el.length - 1, 1);});
        array[array.length - 1].reverse();
        array[array.length - 1].map((el, i) => result.push(el));
        array.splice(array.length - 1, 1);
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i][0])
            array[i].splice(0, 1);
        }
    }
    if (array.length === 0) return result
    if (array[0].length > 0) {
        array[0].map(el => result.push(el));
    } return result;
}