function countWords(input) {
    let pattern = /[A-Za-z0-9_]+/gm;
    let matches = pattern.exec(input);
    
    let dict = {};
    while (matches) {
        let currentWord = matches[0];

        if(dict[currentWord] == undefined) {
            dict[currentWord] = 1;
        }
        else{
            dict[currentWord]++;
        }

        matches = pattern.exec(input);
    }

    console.log(JSON.stringify(dict));
}

countWords("Far too slow, you're far too slow.");