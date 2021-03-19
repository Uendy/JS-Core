function checkAndPrintEmployeeData(input) {
    let pattern = /([A-Z][a-z]+) - ([1-9][0-9]+) - ([A-Za-z0-9- ]+)/gm;
   
    input.forEach(line => {
        let match = pattern.exec(input);
        if(match) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    });
}

checkAndPrintEmployeeData(["Isacc - 1000 - CEO", 
    "Ivan - 500 - Employee", 
    "Peter - 500 - Employee"]);