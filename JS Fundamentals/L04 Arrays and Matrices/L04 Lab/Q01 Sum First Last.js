function sumFirstAndLastElems(array) {
    let sum = 0;
    sum += Number(array[0]);
    sum += Number(array[array.length - 1]);

    console.log(sum);
}

sumFirstAndLastElems(['20', '30', '40']);
sumFirstAndLastElems(['5', '10']);