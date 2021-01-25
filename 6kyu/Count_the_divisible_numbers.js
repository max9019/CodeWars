/*
Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the
number of integers within the range [x..y] (both ends included) that are divisible by k.

More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
 */
function divisibleCount(x, y, k) {
    return Math.floor(y / k) - Math.floor((x - 1) / k);
}
