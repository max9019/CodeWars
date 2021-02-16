/*
https://www.codewars.com/kata/55c04b4cc56a697bb0000048/solutions/javascript/me/best_practice

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to
match str2, otherwise returns false.


 */


function scramble(str1, str2) {
    let letterHolder = {};
    for (let letter of str1) {
        if(letterHolder[letter]) letterHolder[letter]++;
        else letterHolder[letter] = 1;
    }
    for (let letter of str2) {
        if(!letterHolder[letter]) return false
        else letterHolder[letter]--;
    }
    return true;
}

function scramble(str1, str2) {
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    while (str2.length > 0) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] === str2[0]) {
                str2.shift();
            }
        }
    }
    return str2.length === 0
}