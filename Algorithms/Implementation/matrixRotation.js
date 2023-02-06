'use strict';

/*
anti-clockwise 90 degree rotation
*/
function matrixRotation(matrix, r) {
    // Write your code here
    let rows = matrix.length;
    let columns = matrix[0].length;
    let newMatrix = new Array(columns);

    for (let i = 0; i < columns; i++) {
        newMatrix[i] = new Array(rows);
    }

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            newMatrix[i][j] = matrix[j][columns - i - 1];
        }
    }
    return newMatrix

}

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let r = 2;

console.log(matrixRotation(matrix, r));