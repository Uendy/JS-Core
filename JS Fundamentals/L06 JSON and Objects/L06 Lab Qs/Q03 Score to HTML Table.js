function objectToTable(input) {
    let array = JSON.parse(input);

    let string = "<table>\n";
    string += "    <tr>";

    let keys = Object.keys(array[0]);
    for (let key of keys) {
        string += `<th>${key}</th>`;
    }
    string += "</tr>\n";

    for (let obj of array) {
        string += "    <tr>";
        for (let index = 0; index < keys.length; index++) {
            string += `<td>${escapeChars(obj[keys[index]] + "")}</td>`;
        }
        string += "</tr>\n";
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

objectToTable('[{"Name":"Tomatoes & Chips","Price":2.35},' +
     '{"Name":"J&B Chocolate","Price":0.96}]');