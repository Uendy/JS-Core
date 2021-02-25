function logArray(numbers) {
    for (let num of numbers) {
        console.log(Math.log2(num));
    }
}

logArray([1, 2, 3, 4, 5]);