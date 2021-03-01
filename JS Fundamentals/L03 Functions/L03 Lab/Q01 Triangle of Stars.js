function printStars(input) {
    for (let index = 0; index <= input; index++) {
        console.log("*".repeat(index));
    }
    for (let index = input - 1; index >= 0; index--){
        console.log("*".repeat(index));
    }   
}

printStars(1);
printStars(5);