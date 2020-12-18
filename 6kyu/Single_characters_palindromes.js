/*
https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

You will be given a string and you task is to check if it is possible to convert that string into a palindrome
by removing a single character. If the string is already a palindrome, return "OK".
If it is not, and we can convert it to a palindrome by removing one character,
then return "remove one", otherwise return "not possible". The order of the characters should not be changed.
 */

function solve(s){
    function isPalindrome() {
        return arguments[0].split("").reverse().join("") === arguments[0] ? true : false
    }

    if (isPalindrome(s) === true) {
        return "OK"
    }
    else {for (let i = 0; i < s.length; i++) {
        let checkWord = Array.from(s);
        checkWord.splice(i, 1);
        if (isPalindrome(checkWord.join('')) === true) {
            return 'remove one';
        }
    }
    }
    return 'not possible';
}
