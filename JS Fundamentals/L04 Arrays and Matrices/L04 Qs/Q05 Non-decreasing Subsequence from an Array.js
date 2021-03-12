function getIncreasingSeq(array) {
    let result = [];
    array.reduce((accumulator, currentValue) => {
        if(currentValue > accumulator){
            result.push(currentValue);
        }
        return Math.max(accumulator, currentValue);
    }, Number.NEGATIVE_INFINITY);
    console.log(result.join("\n"));

    let biggestNum = Number.NEGATIVE_INFINITY;
    array.forEach(num => {
        if(num > biggestNum){
            biggestNum = num;
            console.log(num);
        }    
    });
}

getIncreasingSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);