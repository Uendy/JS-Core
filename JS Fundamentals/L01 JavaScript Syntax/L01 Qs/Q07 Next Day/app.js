'use strict';

function addDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    return date.getFullYear() + "-" +
        (date.getMonth() + 1) + "-" +
        date.getDate();
    }

console.log(addDay(2016, 9, 30));