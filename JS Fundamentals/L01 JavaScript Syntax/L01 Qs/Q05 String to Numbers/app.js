'use strict';

function concatNumbers(max) {
    let output = "";
    for (let i = 1; i <= max; i++) {
        output += i;
    }

    console.log(output);
}

concatNumbers(11);