/*
https://www.codewars.com/kata/57de78848a8b8df8f10005b1/train/javascript

Your task here is to define how much coffee you need to stay awake after your night.
You will have to complete a function that take an array of events in arguments,
according to this list you will return the number of coffee you need to stay awake during day time.
Note: If the count exceed 3 please return 'You need extra sleep'.
 */

function howMuchCoffee(events) {
    let arr = ['cw', 'cat', 'dog', 'movie'];
    events = events.filter(el => arr.includes(el.toLowerCase())).map(el => el === el.toLowerCase()? 1 : 2)
        .reduce((acc, el) => acc + el, 0);
    return events > 3 ? "You need extra sleep": events;
}