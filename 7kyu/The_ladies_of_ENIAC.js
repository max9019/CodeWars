/*
https://www.codewars.com/kata/56d31aaefd3a52902a000d66/train/javascript

Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

To keep: only alpha characters, space characters and exclamation marks.
To remove: numbers and these characters: %$&/£?@

Result should be all in uppercase.
 */

function radLadies(name){
    return name.replace(/[%$&/£?@1234567890]/g, '').toUpperCase();
}