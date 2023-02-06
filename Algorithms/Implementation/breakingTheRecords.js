'use strict';

/*
 Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there. Scores are in the same order as the games played. Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
 */

function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let countBreakRecords = [0, 0];

    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > max) {
            countBreakRecords[0] += 1;
            max = scores[i];
        }
        if (scores[i] < min) {
            countBreakRecords[1] += 1;
            min = scores[i];
        }
    }

    return countBreakRecords
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));