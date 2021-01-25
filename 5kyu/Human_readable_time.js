/*

https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
 */

function humanReadable(seconds) {
    let h = Math.round(((seconds - (seconds / 60 % 60) * 60) / 3600)).toString();
    let m = Math.round(((seconds - seconds % 60) / 60 % 60)).toString();
    let c = Math.trunc((seconds % 60)).toString();
    let arr = [h, m, c];
    for (let i = 0; i < 3; i++) {
        if (arr[i].length === 1) arr[i] = `0${arr[i]}`
    }
    return arr.join(":");
}