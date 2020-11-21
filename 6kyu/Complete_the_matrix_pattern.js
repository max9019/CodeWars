/*
https://www.codewars.com/kata/582c01ad3fd1cc5736000348

Give you two number m(a positive integer with 5 digits) and n(a positive odd integer >= 3), make a n*n matrix pattern using the digits of m:

 Main diagonal and Vice diagonal fill in the first digit
 At this time the matrix is divided into four triangular areas

 The top area fill in the second digit
 The bottom area fill in the third digit
 The left area fill in the fourth digit
 The right area fill in the fifth digit
 */

function makeMatrix(m, n) {
    let digits = String(m);
    let arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Array(n);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                arr[i][j] = +digits[0];
            } else if (i < j && i + j  < n - 1) {
                arr[i][j] = +digits[1];
            } else if (i < j && i + j > n - 1) {
                arr[i][j] = +digits[4];
            } else if (i > j  && i + j > n - 1) {
                arr[i][j] = +digits[2];
            } else {
                arr[i][j] = +digits[3];
            }
        }
    }
    arr = arr.map(el => el.join(' '));
    return arr.join('\n');
}