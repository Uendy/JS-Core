function checkDiagonalsAndChangeMatrix(input) {
    // get the actual matrix and parse to number
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let currentRowElems = input[i].split(" ");
        let currentRow = [];
        currentRowElems.forEach(element => {
            currentRow.push(Number(element));
        });
        matrix.push(currentRow);
    }

    // check diagonals:
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(row === col){
                leftToRight += matrix[row][col];
            }
            if(row + col === matrix.length - 1){
                rightToLeft += matrix[row][col];
            }
        }        
    }

    if(leftToRight === rightToLeft){
        // set every non diagonal to the sum of one of the diagonals
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                let isDiagonal = row === col || row + col === matrix.length - 1;
                if(!isDiagonal){
                    matrix[row][col] = leftToRight;
                }
            }
        }
    }

    // print the matrix:
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(" "));        
    }
}

checkDiagonalsAndChangeMatrix(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
);

checkDiagonalsAndChangeMatrix(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);