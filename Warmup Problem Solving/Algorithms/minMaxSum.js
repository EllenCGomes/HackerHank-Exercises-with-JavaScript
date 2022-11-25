'use strict';

/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
    let arrAsc = arr.sort(function compareNumbers(a, b) {
        return a - b
    });

    let minSum = 0;
    let maxSum = 0;

    for (let i = 1; i < arrAsc.length; i++) {
        minSum += arrAsc[i - 1];
        maxSum += arrAsc[i];
    }

    console.log(`${minSum} ${maxSum}`);
}

let arr = [3, 5, 1, 9, 7];
miniMaxSum(arr);