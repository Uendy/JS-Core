function matchAllDates(input) {
    let pattern = /\b([0-9]{1,2})-([A-z][a-z]{2,2})-([0-9]{4})/gm;
    let match = pattern.exec(input);

    while (match) {
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        match = pattern.exec(input);
    }
}

matchAllDates("I am born on 30-Dec-1994." +
    "This is not date: 512-Jan-1996." + 
    "My father is born on the 29-Jul-1955.");