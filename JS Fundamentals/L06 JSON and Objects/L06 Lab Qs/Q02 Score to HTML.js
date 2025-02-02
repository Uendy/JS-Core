function objectToHTML(input) {
    let array = JSON.parse(input);

    let string  = "<table>\n";
    let keys = Object.keys(array[0]);
    string += `    <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;

    for (let obj of array) {
        string +=  `    <tr><td>${escapeChars(obj[keys[0]] + '')}</td><td>${escapeChars(obj[keys[1]] + '')}</td></tr>\n`;
    }
    string += "</table>";

    console.log(string);
    
    function escapeChars(string) {
        return string.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, "&quot;")
        .replace(/'/g, '&#39;');
    }
}

objectToHTML('[{"name":"Pesho","score":479},' +
'{"name":"Gosho","score":205}]');