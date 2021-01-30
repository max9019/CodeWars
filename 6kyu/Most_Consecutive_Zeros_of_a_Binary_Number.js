/*

https://www.codewars.com/kata/59decdf40863c76ae3000080/solutions/javascript

Given a string (str) containing a base-10 integer between 0 and 10000, convert the integer to its binary representation.
At that point, obtain a count of the maximum amount of consecutive 0s. From there, return the count in written form with a capital letter.
 */

function maxConsecZeros(n){
    n = +n;
    n = n.toString(2).split('');
    let count = 0;
    let countZeros = [];
    for (let key in n) {
        if (n[key] === '0') {count++;
            countZeros.push(count)}
        if (n[key] !== '0') {countZeros.push(count);
            count = 0}
    }
    return Math.max(...countZeros) === 0 ? 'Zero' :
        Math.max(...countZeros) === 1 ? 'One' :
            Math.max(...countZeros) === 2 ? 'Two' :
                Math.max(...countZeros) === 3 ? 'Three' :
                    Math.max(...countZeros) === 4 ? 'Four' :
                        Math.max(...countZeros) === 5 ? 'Five' :
                            Math.max(...countZeros) === 6 ? 'Six' :
                                Math.max(...countZeros) === 7 ? 'Seven' :
                                    Math.max(...countZeros) === 8 ? 'Eight' :
                                        Math.max(...countZeros) === 9 ? 'Nine' :
                                            Math.max(...countZeros) === 10 ? 'Ten' :
                                                Math.max(...countZeros) === 11 ? 'Eleven' :
                                                    Math.max(...countZeros) === 12 ? 'Twelve' :
                                                        Math.max(...countZeros) === 13 ? 'Thirteen' :
                                                            Math.max(...countZeros) === 14 ? 'Fourteen' :
                                                                Math.max(...countZeros) === 15 ? 'Fifteen' :
                                                                    Math.max(...countZeros) === 16 ? 'Sixteen' :
                                                                        Math.max(...countZeros) === 17 ? 'Seventeen' :
                                                                            Math.max(...countZeros) === 18 ? 'Eightteen' :
                                                                                Math.max(...countZeros) === 19 ? 'Nineteen' : "Twenty";
}