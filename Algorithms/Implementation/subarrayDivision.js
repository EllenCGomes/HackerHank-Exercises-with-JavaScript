'use strict';

/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
- The length of the segment matches Ron's birth month
- The sum of the integers on the squares is equal to his birth day
Determine how many ways she can divide the chocolate.
*/

function birthday(s, d, m) {
    // Write your code here

    let totalWays = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let sum = s[i];
        for (let j = i + 1; j <= i + m - 1; j++) {
            sum += s[j];

        }
        if (sum == d) totalWays++;
    }

    return totalWays

}

let s = [1, 2, 1, 3, 2];
let d = 3;
let m = 2;

console.log(birthday(s, d, m));