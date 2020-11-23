/*
https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript

Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the following format:
"yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day.
The function shall return a one digit integer between 1 and 9 which represents
the Life Path Number of the given date of birth.
 */

function lifePathNumber(dateOfBirth) {
    dateOfBirth = dateOfBirth.replace(/-/g, '').split('');
    while (dateOfBirth.length > 1) {
        dateOfBirth = dateOfBirth.map(el => +el).reduce((acc, curr) => acc + curr).toString().split('');
    }
    return +dateOfBirth;
}