function getBiggestElemOfMatrix(matrix) {
    let max = Number.NEGATIVE_INFINITY; // one of the tests is less than 0
    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        for (let col = 0; col < currentRow.length; col++) {
            let currentElement = currentRow[col];
            if(currentElement > max){
                max = currentElement;
            }
        }
    }

    console.log(max);
}

getBiggestElemOfMatrix([[20, 50, 10],
    [8, 33, 145]]
);
getBiggestElemOfMatrix([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);