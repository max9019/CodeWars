/*

https://leetcode.com/problems/roman-to-integer/

 */


var romanToInt = function(s) {
    function value() {
        if (arguments[0] == 'I')
            return 1;
        if (arguments[0] == 'V')
            return 5;
        if (arguments[0] == 'X')
            return 10;
        if (arguments[0] == 'L')
            return 50;
        if (arguments[0] == 'C')
            return 100;
        if (arguments[0] == 'D')
            return 500;
        if (arguments[0] == 'M')
            return 1000;
    }

    s = s.split('').map(el => value(el));

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length) {
            if (s[i] >= s[i+1]) {
                res += s[i]
            } else {
                res = res + s[i+1] - s[i]
                i++
            }
        } else {
            res += s[i];
        }
    }
    return res;
};
