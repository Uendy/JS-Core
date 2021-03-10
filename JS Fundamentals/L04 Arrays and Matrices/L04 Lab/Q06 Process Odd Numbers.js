function processOddIndex(array) {
    array = array
        .filter((x, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(array.join(" "));
}

processOddIndex([10, 15, 20, 25]);
processOddIndex([3, 0, 10, 4, 7, 3]);