function drawSquares(parameters) {
    let dash = "-";
    let sp = " ";
    let inner = parameters - 2;
    if (parameters % 2 == 0 ) {
        parameters -= 1;
    }
    if (parameters <= 2){
        parameters = 3;
    }
 
    for (let i = 0; i < parameters; i++) {
 
        if (i === 0 || i === parameters - 1 || (parameters-1) / 2 === i) {
            console.log(`+${dash.repeat(inner)}+${dash.repeat(inner)}+`);
        }
        else {
            console.log(`|${sp.repeat(inner)}|${sp.repeat(inner)}|`);
        }
    }
}

drawSquares(4);
drawSquares(5);