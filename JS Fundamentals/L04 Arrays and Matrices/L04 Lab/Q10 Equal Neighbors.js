function matrixPairs(matrix) {
    function checkNeighbours(matrix, row, col) {
        let currentElement = matrix[row][col];
        
        // check below
        if(row + 1 < matrix.length){
            let below = matrix[row + 1][col];
            if(currentElement === below){
                neighbours++;
            }
        }

        // check right
        if(col + 1 < matrix.length){
            let right = matrix[row][col + 1];
            if(currentElement === right){
                neighbours++;
            }
        }
    }
    let neighbours = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) { // matrix[row].length as its not a perfect square matrix in some tests
            checkNeighbours(matrix, row, col);
        }
    }
    console.log(neighbours); 
}

matrixPairs([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]
);