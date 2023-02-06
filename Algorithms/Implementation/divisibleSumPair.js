'use strict';

/*
Given an array of integers and a positive integer "k", determine the number of (i,j) pairs where ar[i] + ar[j] is divisible by "k".
*/

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++)
            if ((ar[i] + ar[j]) % k == 0) count++;
    }

    return count;
}

let ar = [1, 2, 3, 4, 5, 6];
let k = 5;
let n = 6
console.log(divisibleSumPairs(n, k, ar));