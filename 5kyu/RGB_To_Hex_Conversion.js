/*
https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 */

function rgb(r, g, b){
    let result = '';
    let arr = [r, g, b].map(el => el >= 0 && el <= 255 ? el :
        (0 + Math.abs(el) < 250 - Math.abs(el)) ? 0 : 255);
    console.log(arr);
    arr.forEach(el => el.toString(16).toUpperCase().length < 2 ?
        result += `0${el.toString(16).toUpperCase()}` : result += el.toString(16).toUpperCase());
    return result;
}