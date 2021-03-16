function aggregateTable(input) {
    let towns = [];
    let income = 0;
    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];
        currentLine = currentLine.split('|');
        currentLine = currentLine.map(x => x.trim());
        towns.push(currentLine[1]);
        income += Number(currentLine[2]);
    }

    console.log(towns.join(", "));
    console.log(income);
}

aggregateTable(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275']);