function getWords(input) {
    let pattern = /\w+|\d+|_/gm;
    let matches = input.match(pattern);
    console.log(matches.join("|"));
}

getWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');