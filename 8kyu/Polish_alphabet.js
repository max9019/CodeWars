/*

https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
 */

function correctPolishLetters (string) {
    let latinAlphabet = "_acelnoszz";
    let polishAlphabet = "_ąćęłńóśźż";
    return string.replace(/[ąćęłńóśźż]/g, el => latinAlphabet.charAt(polishAlphabet.indexOf(el)));
}