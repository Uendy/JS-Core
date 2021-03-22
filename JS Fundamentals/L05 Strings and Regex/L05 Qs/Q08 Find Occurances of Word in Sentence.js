function findOccurancesOfWord(input, word) {
    let pattern = /(${word})\b/gmi;
    let matches = input.match(pattern);
    console.log(matches.length);
}

findOccurancesOfWord("The waterfall was so high, that the child couldn’t see its peak." , "the");