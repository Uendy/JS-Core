function printOddNums(end) {
    for (let index = 1; index <= end; index++) {
        if(index % 2 !== 0){
            console.log(index);
        }
    }
}

printOddNums(7);