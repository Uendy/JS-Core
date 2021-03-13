function checkIfMagicMatrix(matrix) {
    let desiredSum = matrix[0].reduce((accumulator, currentNum) => {
        return accumulator += currentNum;
    }, 0);

    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
        if (rowSum != desiredSum){
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++)
            colSum += matrix[row][col];
        if (colSum != desiredSum){
            return false;
        }	
    }

    return true;
}

console.log(checkIfMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));