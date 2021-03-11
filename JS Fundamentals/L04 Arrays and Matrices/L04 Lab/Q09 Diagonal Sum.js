function sumDiagonalsOfMatrix(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++){
            if(row === col){
                firstSum += matrix[row][col];
            }
            if(row + col === matrix.length - 1){
                secondSum += matrix[row][col];
            }
        }
    }

    console.log(`${firstSum} ${secondSum}`);

}

sumDiagonalsOfMatrix([[20, 40],
    [10, 60]]
);

sumDiagonalsOfMatrix([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);