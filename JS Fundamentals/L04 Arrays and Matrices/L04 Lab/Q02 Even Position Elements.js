function printEvenIndexs(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        if(i % 2 === 0){
            output.push(array[i]);
        }
    }

    console.log(output.join(" ", array));
}

printEvenIndexs(['20', '30', '40']);
printEvenIndexs(['5', '10']);