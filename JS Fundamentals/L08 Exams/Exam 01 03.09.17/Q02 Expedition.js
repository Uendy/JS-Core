function findPath(primary, secondary, coordinates, start) {
    // Cycle each of the coordinates
    for (let layOvers of coordinates) {
        let x = layOvers[0];
        let y = layOvers[1];

        for (let row = x; row < primary.length && row < secondary[0].length; row++) {
            let currentRow = primary[row];
            for (let col = y; col < currentRow.length && col < secondary[0].length; col++) { 
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
    let steps = 1;
    let currentX = start[0];
    let currentY = start[1];
    primary[currentX][currentY] = 1;
    let goOn = true;
    while(goOn){
        // if step = 1, dont check for exiting
        if(steps === 1){
            let direction = lookForPath(currentX, currentY, primary);

            switch(direction){
                case "down":
                    currentX +=1;
                break;
                case "up":
                    currentX -= 1;
                break;
                case "left":
                    currentY -= 1;
                break;
                case "right":
                    currentY += 1;
                break;
            }
        }
        else{
            // if step > 2:
            // Check for exit (border)
            let exitFound = checkForExit(currentX, currentY, primary);
            if(exitFound !== "none"){
                console.log(steps);
                console.log(exitFound);
                return;
            }

            // check for 0 (path)
            primary[currentX][currentY] = 1;
            let direction = lookForPath(currentX, currentY, primary);
            switch(direction){
                // if found => turn current into 1 and move currentX and currentY, incrament steps
                case "down":
                    currentX +=1;
                break;
                case "up":
                    currentX -= 1;
                break;
                case "left":
                    currentY -= 1;
                break;
                case "right":
                    currentY += 1;
                break;
                case "none":
                // if not found => end with dead end
                goOn = false;

                console.log(steps);

                // find quadrant:
                let halfHeight = primary[0].length / 2;
                let halfWidth = primary.length / 2;
                // 1 (top right)
                if(currentX < halfHeight && currentY >= halfWidth){
                    console.log("Dead end 1");
                }

                // 2 (top left)
                if(currentX < halfHeight && currentY < halfWidth){
                    console.log("Dead end 2");
                }

                // 3 (bottom left)
                if(currentX >= halfHeight && currentY < halfWidth){
                    console.log("Dead end 3");
                }

                // 4 (bottom right)
                if(currentX >= halfHeight && currentY >= halfWidth){
                    console.log("Dead end 4");
                }
                break;
            }
        }
        steps++;
    }

    function lookForPath(x, y, primary) {
        // down: 
        let downX = x + 1;
        if(primary[downX][y] === 0){
            return "down";
        }

        // up: 
        let upX = x - 1;
        if(primary[upX][y] === 0){
            return "up";
        }

        // left: 
        let leftCol = y - 1;
        if(primary[x][leftCol] === 0){
            return "left";
        }

        // right:
        let rightCol = y + 1;
        if(primary[x][rightCol] === 0){
            return "right";
        }

        return "none";
    }

    function checkForExit(x, y, primary) {
        if(x === 0){
            return "Top";
        }

        if(y === 0){
            return "Left";
        }

        if(x === primary.length - 1){
            return "Bottom";
        }

        if(y === primary[0].length - 1){
            return "Right";
        }

        return "none";
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