function findPath(primary, secondary, coordinates, start) {
    // Cycle each of the coordinates
    for (let layOvers of coordinates) {
        let x = layOvers[0];
        let y = layOvers[1];

        for (let row = x; row < primary.length && row < secondary[0].length; row++) {
            let currentRow = primary[row];
            for (let col = y; col < currentRow.length && col < secondary.length; col++) {
                let secondRow = row - x;
                let secondCol = col - y;

                let firstMapCurrent = primary[row][col];
                let secondMapCurrent = secondary[secondRow][secondCol];
                
                // change the primary
                if(secondMapCurrent === 1){
                    if(firstMapCurrent === 0){
                        primary[row][col] = 1;
                    }   
                    else{
                        primary[row][col] = 0;
                    }
                }
                
            }
        }
    }
    

    // begin from start
    // caclulate steps
    // follow the 0's
    // print (exit path, steps and direction) or (find quadrant, steps)
}

findPath([
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]
    ],
   [
    [0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1]
   ],
   [
    [0, 0],
    [2, 1],
    [1, 0]
   ],
   [2, 0]
   );