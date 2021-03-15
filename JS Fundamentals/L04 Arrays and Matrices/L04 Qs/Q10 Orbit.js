function printOrbit(input) {
    let [rows, cols, x, y] = input;

    // make matrix:
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        let currentRow = [cols];
        for (let col = 0; col < cols; col++) {
            currentRow[col] = 0;
        }
        matrix.push(currentRow);
    }       
    
    matrix[x][y] = 1;

    let num = 1;
    let waveCount = 1;
    while (num <= rows) {
        num++;
        let topX = Math.max(0, x - waveCount);
        let topY = Math.max(0, y - waveCount);
        let bottomX = Math.min(matrix.length - 1, x + waveCount);
        let bottomY = Math.min(matrix[0].length - 1, y + waveCount);

        for (let row = topX; row <= bottomX; row++) {
            for (let col = topY; col <= bottomY; col++) {
                if(matrix[row][col] === 0){
                   matrix[row][col] = num; 
                }
                
            }
        }
        waveCount++;
    }

    // print:
    for (let row = 0; row < rows; row++) {
        console.log(matrix[row].join(" "));
    }
}

printOrbit([4, 4, 0, 0]);