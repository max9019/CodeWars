/*
https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".
 */

function encode(string) {
    return string.replace(/[aeiou]/g, el => '_aeiou'.indexOf(el));
};

function decode(string) {
    return string.replace(/[1-5]/g, el => '_aeiou'.charAt(+el));
};