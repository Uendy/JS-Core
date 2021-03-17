function escapeText(input) {
    function escapeChars(line) {
        return line.replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;");
    }

    let output = [];
    output.push("<ul>");
    input.forEach(line => {
        output.push(` <li>${escapeChars(line)}</li>`);
    });
    output.push("</ul>");
    console.log(output.join("\n"));
}

escapeText(["<b>unescaped text</b>", "normal text"]);