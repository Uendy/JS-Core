function getFirstAndLastElements(array) {
    let count = array.shift(0);
    let first = array.slice(0, count);
    let last = array.splice (array.length - count, count);

    console.log(first.join(" "));
    console.log(last.join(" "));
}
getFirstAndLastElements([2, 7, 8, 9]);
getFirstAndLastElements([3, 6, 7, 8, 9]);
