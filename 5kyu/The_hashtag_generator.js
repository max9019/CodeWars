/*
https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
 */

function generateHashtag (str) {
    str = str.split(' ').filter(el => el !== '')
        .map(el => `${el[0].toUpperCase()}${el.slice(1, el.length)}`).join('');
    return str.length === 0 ? false : str.length > 139 ? false : `#${str}`;
}