function printSpiralMatrix(rows, cols) {
    let result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
    }

    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // top 
        for (let i = startCol; i <= endCol; i++) {
          result[startRow][i] = counter;
          counter++;
        }
        startRow++;
    
        // right
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        
        // left
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    for (let row = 0; row < rows; row++) {
        let currentRow = "";
        for (let col = 0; col < cols; col++) {
            currentRow += result[row][col] + " ";
        }
        console.log(currentRow);
    }
}

printSpiralMatrix(5, 5);