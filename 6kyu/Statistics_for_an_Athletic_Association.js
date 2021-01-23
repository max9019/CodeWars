/*

https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript

You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time
you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or
null integer (represented as strings) with one or two digits. There are no traps in this format.

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form:

"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
 */

function stat(strg) {
    if (strg.length === 0) return "";

    let resultsArr = strg.split(', ').map(el => el.split('|')).map(el => el = (((+el[0] * 60) + +el[1]) * 60) + +el[2]);

    let range = Math.max(...resultsArr) - Math.min(...resultsArr);

    let average = resultsArr.reduce((acc, curr) => acc + curr) / resultsArr.length;

    function median(resultsArr) {
        resultArr = resultsArr.sort((a, b) => a - b);
        if (resultsArr.length % 2 !== 0) {return resultsArr[resultsArr.length / 2 - 0.5]
        } else {return (resultsArr[resultsArr.length / 2] + resultsArr[(resultsArr.length / 2) - 1]) / 2}
    };

    function timeConv(value) {
        let h = Math.round(((value - (value / 60 % 60) * 60) / 3600)).toString();
        let m = Math.round(((value - value % 60) / 60 % 60)).toString();
        let c = Math.trunc((value % 60)).toString();
        let arr = [h, m, c];
        for (let i = 0; i < 3; i++) {
            if (arr[i].length === 1) arr[i] = `0${arr[i]}`
        }
        return arr.join("|");
    }
    return `Range: ${timeConv(range)} Average: ${timeConv(average)} Median: ${timeConv(median(resultsArr))}`;
}
