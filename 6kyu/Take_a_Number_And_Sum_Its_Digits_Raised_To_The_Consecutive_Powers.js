/*

https://www.codewars.com/kata/5626b561280a42ecc50000d1

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
 */

function sumDigPow(a, b) {
    let arr = [];
    let str = '';
    let sum = 0;
    let exp = 1;
    for (let i = a; i <= b; i++) {
        if (i < 10) {arr.push(i)}
        if (i > 10) { str = i.toString()
            sum = 0;
            exp = 1;
            for (let j= 0; j < str.length; j++) {
                sum += Math.pow(+str[j], exp)
                exp++;
            } if (sum === +str) arr.push(i)
        }
    } return arr;
}