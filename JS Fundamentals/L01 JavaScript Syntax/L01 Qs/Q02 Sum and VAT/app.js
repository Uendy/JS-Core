'use strict';

function sumAndVAT(numbers) {
    let sum = 0;
    for (let num = 0; num < numbers.length; num++) {
        sum += numbers[num];
    }     
    console.log(`sum = ${sum}`);
    console.log(`VAR = ${sum * 0.2}`);
    console.log(`Total = ${sum * 1.2}`);
}

sumAndVAT([10, 15, 20]);