function splitStringWithDelimeter(string, delimeter) {
    let tokens = string.split(delimeter);
    tokens.forEach(x => console.log(x));
}

splitStringWithDelimeter("One-Two-Three-Four-Five", "-");