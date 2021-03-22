function getVariableNames(input) {
    let pattern =  /_[A-Za-z[0-9]+/gm;
    let output = [];
    let matches = pattern.exec(input);
    while (matches){
        let variable = matches[0].substring(1);

        output.push(variable);
        matches = pattern.exec(input);
    }

    console.log(output.join(","));
}

getVariableNames("The _id and _age variables are both integers.");
getVariableNames("_test _003 _out _txt");