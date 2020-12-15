/*

https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript

Create a function that takes any sentence and redistributes the spaces
(and adds additional spaces if needed) so that each word starts with a vowel.
 */

function vowelStart(str){
    function swap(letter) {
        switch (letter) {
            case 'a': return " a";
                break;
            case 'e': return " e";
                break;
            case 'o': return " o";
                break;
            case 'u': return " u";
                break;
            case 'i': return " i";
                break;
        }
    }
    return str.toLowerCase().replace(/[' ']/g, '').replace(/[aeoui]/g, swap).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trimLeft();

}