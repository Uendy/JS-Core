function checkIfPointIsInRectangle(input) {
    let x = input[0];
    let y = input[1];

    let minX = input[2];
    let maxX = input[3];

    let minY = input[4];
    let maxY = input[5];

    let inX = x >= minX && x <= maxX;
    let inY = y >= minY && y <= maxY;

    if(inX && inY){
        console.log("Inside");
    }
    else{
        console.log("Outside");
    }
}

checkIfPointIsInRectangle([8, -1, 2, 12, -3, 3]);