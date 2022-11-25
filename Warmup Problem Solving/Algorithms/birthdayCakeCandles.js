'use strict';

/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
*/

function birthdayCakeCandles(candles) {
    // Write your code here
    let total = 0;
    let tallestNumber = candles.reduce((a, b) => Math.max(a, b), -Infinity)
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === tallestNumber) total += 1
    }
    return total
}

let candles = [1, 2, 1, 2]
console.log(birthdayCakeCandles(candles));