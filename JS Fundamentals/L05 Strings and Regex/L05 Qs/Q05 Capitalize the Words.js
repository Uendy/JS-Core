function capitalizeAllWords(string) {
    let words = string.split(" ");

    let output = [];

    words.forEach(word => {
        let firstLetter = word[0].toUpperCase();
        let rest = word.substring(1, word.length).toLowerCase();
        let capitalizedWord = firstLetter + rest;
        output.push(capitalizedWord);
    });
    
    console.log(output.join(" "));
}

capitalizeAllWords("Capitalize these words");