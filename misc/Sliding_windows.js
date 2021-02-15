let s = "cbaebabacd";
let p = 'abc'

// find index of appearance of all anagrams. For example, anagram for "abc" will
//appear at index 0 and index 6. The output should be [0, 6]


//Brute Force

function findAnagrams(s, p) {
    let result = [];
    p = p.split('').sort().join(''); // sorted string that we are lookng for
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + p.length).split('').sort().join('') === p ) result.push(i);
        //we cut of a peace of long string, sort it and compare to a sorted string we are lookign for
    }
    return result;
}

console.log('Brute force solution --->', findAnagrams(s, p));

// The problem of brute force method is that in 'for' loop we're using a nested method 'sort()' during each iteration
// This raises the complecity of the code into n log n power. It's super long for long strings

// sliding window works like a window of our scope, which you're moving through the long string.
// Since it's moving one element at a time, we only delete one element from left and add one element from right
// into our scope.
// Example -> [] is a window. '[cba]ebabacd' -> 'c[bae]babacd' -> 'cb[aeb]abacd' -> 'cba[eba]bacd' & etc.
// This will be the solution with the sliding window:

function findAnagram(s, p) {
    let result = [],
        mapOfLettersOfLookingWord = {},
        left = 0,
        right = 0,
        count = p.length;

    s = s.split('');

    for (let i = 0; i < p.length; i++) {
        mapOfLettersOfLookingWord[p.charAt(i)] ? mapOfLettersOfLookingWord[p.charAt(i)]++ : mapOfLettersOfLookingWord[p.charAt(i)] = 1;
    }

    while (right < s.length) {
        if (mapOfLettersOfLookingWord[s[right++]]-- >= 1) count--;
        if (count === 0) result.push(left);
        if (right - left === p.length && mapOfLettersOfLookingWord[s[left++]]++ >= 0) count++;
    }
    return result;
}

console.log('Sliding window solution --->', findAnagram(s, p));