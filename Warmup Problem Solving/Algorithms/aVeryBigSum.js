'use strict';

/*
Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
*/

function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum

}

let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar));