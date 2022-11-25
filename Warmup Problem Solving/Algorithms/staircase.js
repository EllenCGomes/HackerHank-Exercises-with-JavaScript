'use strict';

/* This is a staircase of size N = 4:

   #
  ##
 ###
####

Its base and height are both equal to N. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size N.

Staircase has the following parameter(s): int n: an integer

Constraints: 0 < n <= 100

Note: The last line must have 0 spaces in it.
*/

function staircase(n) {
    let space = " ";
    let square = "#"
    for (let i = 1; i <= n; i++) {
        console.log(space.repeat(n - i) + square.repeat(n - (n - i)));
    }
}

staircase(6);

