/*
https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript

Given a year, Find The next happy year or The closest year You'll see your best friend
 */

function nextHappyYear(year){
    year++;
    let yearArr = [];
    do {year = year.toString().split('');
        yearArr = year.filter(el => year.indexOf(el) !== year.lastIndexOf(el));
        year = +year.join('');
        year++;
    } while (yearArr.length !== 0)
    return year - 1;
}