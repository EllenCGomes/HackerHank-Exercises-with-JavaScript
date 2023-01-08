'use strict';

/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals and return it as a single integer.
For example, the square matrix arr is shown below:
1 2 3
4 5 6
9 8 9
The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.
*/

function diagonalDifference(arr) {
    // Write your code here
    const arrLength = arr.length;
    let mainDiagonal = 0;
    let counterDiagonal = 0;

    for (let i = 0; i < arrLength; i++) {
        mainDiagonal += arr[i][i];
        counterDiagonal += arr[i].reverse()[i];

    }

    return Math.abs(mainDiagonal - counterDiagonal);

}

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
console.log(diagonalDifference(arr));