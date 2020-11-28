/*
https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

Complete the method so that it formats the words into a single comma separated value.
The last word should be separated by the word 'and' instead of a comma.
The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored.
Empty arrays or null/nil values being passed into the method should result in an empty string being returned.
 */

function formatWords(words){
    if (words === null) return '';
    words = words.filter(el => el !== '');
    switch(words.length){
        case 0: return ""
            break;
        case 1: return words.toString()
            break;
        default:
            words = words.join(', ');
            return `${words.substring(0, words.lastIndexOf(','))} and${words.substring(words.lastIndexOf(',')+1, words.lenght)}`;
    }
}