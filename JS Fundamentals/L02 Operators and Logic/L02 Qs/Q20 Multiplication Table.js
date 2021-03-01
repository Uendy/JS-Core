function createMultiplicationTable(end) {
    console.log(`<table border="1">`);

    let prefix = "<td>";
    let postfix = "</td>";

    let boldPrefix = "<th>";
    let boldPostfix = "</th>"

    for (let row = 0; row <= end; row++) {
        let line = " <tr>";
        for (let col = 0; col <= end; col++) {
            if(row === 0 && col === 0){
                line += boldPrefix + "x" + boldPostfix;
            }
            else if(row === 0 || col === 0)
            {
                line += boldPrefix + `${row + col}` + boldPostfix;                
            }
            else{
                line += prefix + (row * col) + postfix;
            }
        }
        line += "</tr>";
        console.log(line);
    }
    console.log(`</table>`);
}

createMultiplicationTable(5);