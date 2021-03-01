function createMultiplicationTable(end) {
    console.log(`<table border="1">`);

    let prefix = "<td>";
    let postfix = "</td>";

    let boldPrefix = "<th>";
    let boldPostfix = "</th>"

    for (let row = 1; row <= end; row++) {
        let line = " <tr>";
        for (let col = 1; col <= end; col++) {
            if(row === 1 && col === 1){
                line += prefix + "x" + postfix;
            }
            else if(row === 1 || col === 1)
            {
                line += "<th>" + `${row * col}` + "</th>"                
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