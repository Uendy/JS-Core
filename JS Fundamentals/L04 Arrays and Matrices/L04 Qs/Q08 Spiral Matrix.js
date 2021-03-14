function printSpiralMatrix(size) {
    let rows = size[0];
    let cols = size[1];

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
        for (let i = endRow; i >= startCol; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    result.forEach(row => {
        console.log(result.join(" "));
    });
}

printSpiralMatrix([5, 5]);