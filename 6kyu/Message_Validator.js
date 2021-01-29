/*
https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/solutions/javascript

In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need
to split the string by the numbers,
and then compare the numbers with the number of characters in the following substring.
 */

function isAValidMessage(message){
    if (message.length === 0) return true;
    if (isNaN(+message[0]) || !isNaN(+message[message.length - 1])) return false;
    if (message.length === 0) return true;
    let words = message.split(/[0-9]/).filter(el => el !== '');
    let numbers = message.split(/[a-z]/).filter(el => el !== '').map(el => +el);
    for (let i = 0; i < words.length; i++) {
        if (words[i].length !== numbers[i]) {return false;
            break;
        }
    }
    return words.length !== numbers.length ? false : true;
}
