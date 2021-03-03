function getWordsAndCapitalizeThem(input) {
    let words = input.toUpperCase()
        .split(/\W+/)
        .filter(w => w !== " ");

    console.log(words.join(", "));
}

getWordsAndCapitalizeThem('Hi, how are you?')