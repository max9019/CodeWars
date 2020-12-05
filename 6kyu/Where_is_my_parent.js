/*
https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
 */

function findChildren(dancingBrigade){
    let arr = dancingBrigade.toLowerCase().split('').sort()
    let arr2 = arr.filter((el, i) => i === arr.lastIndexOf(el));
    arr2 = arr2.map(el => el = arr.indexOf(el))
    for (i = 0; i < arr2.length; i++) {
        arr[arr2[i]] = String.fromCharCode(arr[arr2[i]].charCodeAt() - 32);
    }
    return arr.join('');
};