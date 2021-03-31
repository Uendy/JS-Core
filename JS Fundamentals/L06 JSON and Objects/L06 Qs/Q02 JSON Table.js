function objectToTable(input) {
    let output = "<table>\n";
    

    for (let obj of input) {
        output += "\t<tr>\n";
        
        for (let key of Object.keys(obj)) {
            output += `\t\t<td>${obj[key]}</td>\n`;
        }

        output += "\t</tr>\n";
    }

    output += "</table>\n";
    console.log(output);
}

objectToTable([
{"name":"Pesho","position":"Promenliva","salary":100000},
{"name":"Teo","position":"Lecturer","salary":1000},
{"name":"Georgi","position":"Lecturer","salary":1000}
]);