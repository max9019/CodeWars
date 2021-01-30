/*

https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

Complete the solution so that the function will break up camel casing, using a space between words.
 */

function solution(string) {
    string = string.split('');
    let result = '';
    for (let key in string) {
        if (string[key] === string[key].toLowerCase()) {result += string[key];}
        if (string[key] !== string[key].toLowerCase()) {result = result + ' ' + string[key];}
    }
    return result;
}