'use strict';

/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
*/

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let multiple = grades[i] + 1;
            while (multiple % 5 != 0) {
                multiple++;
            }
            if ((multiple - grades[i]) < 3) {
                grades[i] = multiple;
            }
        }
    }
    return grades;
}

let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));