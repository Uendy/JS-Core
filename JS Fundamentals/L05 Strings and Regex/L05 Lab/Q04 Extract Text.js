function extractText(input) {
    let output = [];
    while (input.indexOf("(") > 0) {
        let indexOfStart = input.indexOf("(");
        let indexOfEnd = input.indexOf(")");

        // this was a dumb test to add for the 4th lab question
        if(indexOfEnd < indexOfStart){
            break;
        }

        let sub = input.substring(indexOfStart + 1, indexOfEnd);
        output.push(sub);
        input = input.substring(indexOfEnd + 1);
    }

    console.log(output.join(", "));
}   

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');