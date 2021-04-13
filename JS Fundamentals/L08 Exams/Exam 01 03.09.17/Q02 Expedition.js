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
    let log = [start];
    let steps = 1;
    let currentX = start[0];
    let currentY = start[1];
    let goOn = true;
    while(goOn){
        
    }
    // caclulate steps
    // follow the 0's
    // print (exit path, steps and direction) or (find quadrant, steps)

    function lookForPath(x, y, primary) {
        // down: 
        let downX = x - 1;
        if(primary[downX][y] === 0 && checkCoordinate(downX, "row", primary)){
            return "down";
        }

        // up: 
        let upX = x + 1;
        if(primary[upX][y] === 0 && checkCoordinate(upX, "row", primary)){
            return "up";
        }

        // left: 
        let leftCol = y - 1;
        if(primary[x][leftCol] === 0 && checkCoordinate(leftCol, "col", primary)){
            return "left";
        }

        // right:
        let rightCol = y + 1;
        if(primary[x][rightCol] === 0 && checkCoordinate(rightCol, "col", primary)){
            return "right";
        }
    }

    function checkCoordinate(value, orientation, primary) {
        if(orientation === "row"){
            let rowMax = primary.length();
            if(value >= 0 && value < rowMax){
                return true;
            }
        }
        else{
            let colMax = primary[0].length();
            if(value >= 0 && value < colMax){
                return true;
            }
        }

        return false;
    }
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