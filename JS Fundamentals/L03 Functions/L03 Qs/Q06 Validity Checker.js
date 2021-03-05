function checkPoint(input) {
    let x1 = input[0];
    let y1 = input[1];

    let x2 = input[2];
    let y2 = input[3];

    function checkIfValid(firstX, firstY, secondX, secondY) {
        let xDiff = Math.abs(secondX - firstX);
        let yDiff = Math.abs(secondY - firstY);

        let distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        let isValid = distance % 1 === 0;

        if(isValid){
            console.log(`{${firstX}, ${firstY}} to {${secondX}, ${secondY}} is valid`)
        }
        else{
            console.log(`{${firstX}, ${firstY}} to {${secondX}, ${secondY}} is invalid`)
        }
    }

    checkIfValid(x1, y1, 0, 0);
    checkIfValid(x2, y2, 0, 0);
    checkIfValid(x1, y1, x2, y2);
}

checkPoint([3, 0, 0, 4]);
checkPoint([2, 1, 1, 1]);