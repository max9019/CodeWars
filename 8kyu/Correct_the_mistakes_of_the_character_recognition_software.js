/*
https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 */

function correct(string)
{
    return string.replace(/[501]/g, el => 'OI___S'.charAt(+el));
}