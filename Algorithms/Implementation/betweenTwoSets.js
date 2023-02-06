'use strict';

/*
There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
*/

function getTotalX(a, b) {
    // Write your code here
    let count = 0;

    function factorA(dividend, list) {
        for (let i = 0; i < list.length; i++) {
            if (dividend % list[i] != 0) return false
        }
        return true;
    }

    function factorB(dividend, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] % dividend != 0) return false
        }
        return true;
    }

    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        if (factorA(i, a) && (factorB(i, b))) count++;
    }

    return count;

}


let a = [2, 4];
let b = [16, 32, 96];
console.log(getTotalX(a, b));


