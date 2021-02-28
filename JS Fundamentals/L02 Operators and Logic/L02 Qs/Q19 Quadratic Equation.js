function quadEquation(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];

    firstX = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    secondX = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

    console.log(Math.min(firstX, secondX));
    console.log(Math.max(firstX, secondX));
}

quadEquation([6, 11, -35]);