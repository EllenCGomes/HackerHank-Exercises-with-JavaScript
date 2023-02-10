'use strict';

/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
*/

function migratoryBirds(arr) {
    // Write your code here
    const elementCounter = {};

    arr.forEach(element => elementCounter[element] = elementCounter[element] + 1 || 1);

    const maxValue = Math.max(...Object.values(elementCounter));

    for (const [key, value] of Object.entries(elementCounter)) {
        if (value === maxValue) return key;
    }

}



let arr = [1, 1, 2, 2, 3];
console.log(migratoryBirds(arr));