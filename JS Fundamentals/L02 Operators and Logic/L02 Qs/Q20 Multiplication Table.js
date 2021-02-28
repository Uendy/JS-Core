function createMultiplicationTable(end) {
    console.log(`<table border="1">`);

    let prefix = "<th>";
    let postfix = "</th>";

    for (let row = 1; row <= end; row++) {
        let line = " <tr>";
        for (let col = 0; col <= end; col++) {
            if(row === 1 && col === 0){
                line += prefix + "x" + postfix;
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