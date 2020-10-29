/*
https://www.codewars.com/kata/57a42ef9e298a72d710002aa

Complete function howManyStep that accept two number a and b (0 < a <= b). You need turn a into b.

The rules is only can double (a=a*2) or plus 1 (a=a+1). return the shortest step.
 */

function howManyStep(a,b){
    if (a === b) return 0;
    let count = 0;
    while (b > a) {
        if (b % 2 !== 0) {b = b - 1
            count++
            continue;}
        if (b % 2 === 0) {
            if (b >= a * 2) {b = b / 2
                count++
            } else {b = b - 1
                count++;}
        }
    } return count;
}