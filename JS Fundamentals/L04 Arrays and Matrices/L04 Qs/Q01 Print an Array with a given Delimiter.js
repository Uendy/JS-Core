function printArrayWithDelimeter(array) {
    let delimeter = array.pop();
    console.log(array.join(delimeter));
}

printArrayWithDelimeter(["One", "Two", "Three", "Four", "Five", "-"]);