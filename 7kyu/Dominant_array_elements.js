/*

https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task
will be to return a list of all dominant elements.
 */

function solve(arr){
    const arr1=[];
    for (let i=0;i<arr.length-1;i++){
        let n=arr[i]
        let arr2=arr.slice(i+1)
        let arr3=arr2.map(v=>n>v)
        if (arr3.every(v=>v===true)){arr1.push(n)}
    }
    arr1.push(arr[arr.length-1])
    return arr1
};