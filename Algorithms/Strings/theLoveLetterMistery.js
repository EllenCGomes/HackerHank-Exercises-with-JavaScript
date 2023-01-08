'use strict';

/*
James found a love letter that his friend Harry has written to his girlfriend. James is a prankster, so he decides to meddle with the letter. He changes all the words in the letter into palindromes.

To do this, he follows two rules:

He can only reduce the value of a letter by 1, i.e. he can change "d" to "c", but he cannot change "c" to "d" or "d" to "b".
The letter "a" may not be reduced any further.
Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert a given string into a palindrome.
*/

function theLoveLetterMystery(s) {
    let count = 0;
    let len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] != s[len - 1 - i]) {
            let firstLetter = s.charCodeAt(i);
            let lastLetter = s.charCodeAt(len - 1 - i);
            count += (lastLetter > firstLetter) ? lastLetter - firstLetter : firstLetter - lastLetter;
        }
    }
    return count;
}

let s = "abc";
console.log(theLoveLetterMystery(s));