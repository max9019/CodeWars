/*

https://www.codewars.com/kata/52597aa56021e91c93000cb0

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


 */

var moveZeros = function (arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i,1);
            count++;
            i--;
        }
    }
    for(let j = 0; j < count; j++){
        arr.push(0);
    }
    return arr;
}