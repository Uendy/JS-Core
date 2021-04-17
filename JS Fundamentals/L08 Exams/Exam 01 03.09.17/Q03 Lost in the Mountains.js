function decypherCode(keyword, text) {
    
    let firstKeyWordIndex = text.indexOf(keyword);
    let secondKeyWordIndex = text.indexOf(keyword, firstKeyWordIndex + 1);

    // get the message
    let message = text.substring(firstKeyWordIndex + keyword.length, secondKeyWordIndex);

    // remove secret text
    text = text.replace(message, "");

    // move onto finding the coordinates
    let pattern = /(north|east)\D*(\d{2})[^\,]*\D*(,{1})\D*(\d{6})/gmi;
    let match = pattern.exec(text);

    let lattitude;
    let longitude;

    while (match) {
        if(match[1].toLocaleLowerCase() === "north"){
            lattitude = `${match[2]}.${match[4]} N`;
        }
        else if(match[1].toLocaleLowerCase() === "east"){
            longitude = `${match[2]}.${match[4]} E`;
        }
        match = pattern.exec(text);
    }

    console.log(lattitude);
    console.log(longitude);
    console.log(`Message: ${message}`);
}

decypherCode("<>",
    "o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k<>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b");

decypherCode("4ds",
    "eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532")