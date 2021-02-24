function cycleAndColor(input) {
    
    console.log("<ul>");

    let indentation = "    ";

    for (let index = 1; index <= input; index++) {

        let color = index % 2 == 0 ? "blue" : "green";
        console.log(`${indentation}<li><span style='color:${color}'>${index}</span></li>`);
    }
    
    console.log("</ul>");
}

cycleAndColor(10);