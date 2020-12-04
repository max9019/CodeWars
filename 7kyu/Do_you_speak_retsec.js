/*
https://www.codewars.com/kata/5516ab668915478845000780/train/javascript

You're given a single word. Your task is to swap the halves. If the word has an uneven length,
leave the character in the middle at that position and swap the chunks around it.
 */

function reverseByCenter(s){
    let i = Math.trunc(s.length / 2);
    return s.length % 2 === 0 ? s.slice(i) + s.slice(0, i) : s.slice(i + 1) + s[i] + s.slice(0, i);
}