/*
https://www.codewars.com/kata/526233aefd4764272800036f

Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

How to sum two matrices:

Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

Visualization:

|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
 */

function matrixAddition(a, b){
    let result = new Array(a.length).fill().map(()=>new Array(a[0].length).fill());
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            result[i].splice(j, 1, (a[i][j] + b[i][j]));
        }
    } return result;
}