'use strict';

/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where "s" is the start point, and "t" is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point "a", and the orange tree is at point "b".
When a fruit falls from its tree, it lands "d" units of distance from its tree of origin along the x-axis. A negative value of "d" means the fruit fell "d" units to the tree's left, and a positive value of "d" means it falls "d" units to the tree's right.

Given the value of "d" for "m" apples and "n" oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t]).
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // add a on each apple and b on each orange
    let appleCounting = 0;
    let orangeCounting = 0;

    for (let i = 0; i < apples.length; i++) {
        // appleLanding.push(apples[i] + a);
        if (s <= apples[i] + a && apples[i] + a <= t) {
            appleCounting++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        // orangeLanding.push(oranges[i] + b);
        if (s <= oranges[i] + b && oranges[i] + b <= t) {
            orangeCounting++;
        }
    }

    console.log(`${appleCounting}\n${orangeCounting}`);

}

let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [2, 3, -4];
let oranges = [3, -2, -4];
countApplesAndOranges(s, t, a, b, apples, oranges);