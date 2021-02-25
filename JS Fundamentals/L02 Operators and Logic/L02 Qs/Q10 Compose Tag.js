function composeTag(input) {
    
    let fileLocation = input[0];
    let altText = input[1];

    //<img src="{file location}" alt="{alternate text}">
    console.log(`<img src="${fileLocation}" alt="${altText}">`)
}

composeTag(['smiley.gif', 'Smiley Face']);