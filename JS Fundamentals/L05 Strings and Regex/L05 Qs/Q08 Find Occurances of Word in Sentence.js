function findOccurancesOfWord(input, word) {
    let patternString = '\\b' + `${word}` + '\\b';
    let pattern = new RegExp(patternString, 'gi');

    let matches = input.match(pattern);
    if(!matches){
        console.log(0);
    }
    else{
        console.log(matches.length);
    }
}

findOccurancesOfWord("The waterfall was so high, that the child couldn’t see its peak." , "the");