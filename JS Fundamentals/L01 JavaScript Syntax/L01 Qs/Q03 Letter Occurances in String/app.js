'use strict';

function getOccurances(string, letter) {
    let occurances = 0;

    for (let index = 0; index < string.length; index++) {
        let currentLetter = string[index];

        if (currentLetter === letter) {
            occurances++;
        }
    }

    return occurances;
}

console.log(getOccurances("hello", 'l'));