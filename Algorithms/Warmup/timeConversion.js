"use strict";

/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
      - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

function timeConversion(s) {
    // Write your code here
    let formatString = s.replace(" ", "").toUpperCase();
    if (formatString.length == 10) {
        const time = formatString.slice(0, -2);
        const dayPeriod = formatString.slice(-2);
        let [hours, minutes, seconds] = time.split(":");

        if (dayPeriod === "AM" && hours === "12") {
            hours = "00";
        }
        if (dayPeriod === "PM" && hours !== "12") {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}:${seconds}`;
    } else {
        console.log("Please insert a string that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM)")
    }
}

let s = "12:00:01AM";
console.log(timeConversion(s));
