function quadEquation(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];

    let d = Math.pow(b, 2) - 4 * a * c;
    if(d > 0){
        let firstX = ((-b) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        let secondX = ((-b) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

        console.log(Math.min(firstX, secondX));
        console.log(Math.max(firstX, secondX)); 
    }
    else if(d === 0){
        let x = (-b) / (2 * a);
        console.log(x);
    }
    else{ 
        // d < 0
        console.log("No");
    }
}

quadEquation([6, 11, -35]);
quadEquation([1, -12, 36]);
quadEquation([5, 2, 1]);