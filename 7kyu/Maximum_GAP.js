/*
https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript

Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
 */

function maxGap(numbers){
    numbers.sort((b, a) => b - a);
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i + 1] - numbers[i]) > result) {
            result = (numbers[i + 1] - numbers[i]);
        }
    }
    return result;
}