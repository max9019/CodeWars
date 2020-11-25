/*
https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
 */




function dataReverse(data) {
    let result = [];
    for (let i = data.length - 8; i >= 0; i -= 8) {
        result.push(data.slice(i, i + 8));
    }
    result = result.join(',');
    return Array.from(result).filter(el => el !== ',').map(el => el = +el);
}