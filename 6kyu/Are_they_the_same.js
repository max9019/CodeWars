/*

https://www.codewars.com/kata/550498447451fbbd7600041c

Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 */

function comp(array1, array2){
    if (array1 === null || array2 === null) return false;
    for (let i = 0; i < array1.length; i++) {
        array1[i] = array1[i] * array1[i];
    } array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    return array1.every((val, index) => val === array2[index]);
}