function printTwoSmallest(array) {
    array = array.sort((a, b) => a - b);
    console.log(array.slice(0, 2));
}

printTwoSmallest([30, 15, 50, 5]);
printTwoSmallest([3, 0, 10, 4, 7, 3]);