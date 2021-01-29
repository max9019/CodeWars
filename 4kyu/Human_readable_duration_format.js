/*
https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds,
in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is
expressed as a combination of years, days, hours, minutes and seconds.
 */

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    if (seconds === 1) return '1 second';
    let y = Math.floor(seconds / 31536000);
    seconds -= y * 31536000;
    let d = Math.floor(seconds / 86400);
    seconds -= d * 86400;
    let h = Math.floor(seconds / 3600);
    seconds -= h * 3600;
    let m = Math.floor(seconds / 60);
    seconds -= m * 60;
    let s = seconds;
    let arr = [y, d, h, m, s];
    let result = '';
    let single = ['year', 'day', 'hour', 'minute', 'second'];
    let plural = ['years', 'days', 'hours', 'minutes', 'seconds'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {continue;}
        if (arr[i] === 1) {result += `${arr[i]} ${single[i]}, `;}
        if (arr[i] > 1) {result += `${arr[i]} ${plural[i]}, `;}
    }
    result = result.slice(0, result.length - 2);
    for (let i = result.length - 1; i > 0; i--) {
        if (result[i] === ',') {
            result = `${result.slice(0, i)} and ${result.slice(i+2, result.length)}`;
            break;}
    }
    return result;
}
