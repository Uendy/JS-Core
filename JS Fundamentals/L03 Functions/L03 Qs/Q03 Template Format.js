function createTemplate(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log("<quiz>");

    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i + 1];
        
        function printQandA(question, answer) {
            console.log("   <question>");
            console.log(`   ${question}`);
            console.log("   </question>")

            console.log("   <answer>");
            console.log(`   ${answer}`);
            console.log("   </answer>");
        }

        printQandA(question, answer);
    }

    console.log("</quiz>")
}

createTemplate(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"]);