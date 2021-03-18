function splitString(input) {
    let pattern = /[,;(). \s]+/;
    let strings = input.split(pattern);
    strings.forEach(element => {
        console.log(element);
    });
}

splitString('let sum = 4 * 4,b = "wow";');