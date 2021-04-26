function calculateSpiceYield(start) {
    let initial = Number(start[0]);
    let spiceMined = 0;
    let days = 0;

    for (let spice = initial; spice >= 100; spice -= 10) {
        spiceMined += spice;
        days++;
        spiceMined -= 26;    
    }

    spiceMined -= 26;
    if(spiceMined < 0){
        spiceMined = 0;
    }

    console.log(days);
    console.log(spiceMined);
}

calculateSpiceYield(["111"]);
calculateSpiceYield(["450"]);
calculateSpiceYield(["200"]);