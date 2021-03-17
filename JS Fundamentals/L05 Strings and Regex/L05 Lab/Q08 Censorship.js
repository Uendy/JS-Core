function censorText(text, censoredStrings) {
    censoredStrings.forEach(censor => {
        while (text.indexOf(censor) > 0 ) {
            text = text.replace(censor, "-".repeat(censor.length));
        }
    });

    console.log(text);
}

censorText('roses are red, violets are blue', [', violets are', 'red']);