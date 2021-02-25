function primeChecker(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

console.log(primeChecker(81));