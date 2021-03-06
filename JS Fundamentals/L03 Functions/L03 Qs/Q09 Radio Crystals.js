function tuneCrystal(input) {
    let desiredFreq = input[0];
    let currentFreq = input[1];

    console.log(`Processing chunk ${currentFreq} microns`);

    function cut(currentFreq) {
        return currentFreq / 4;
    }

    function lap(currentFreq) {
        return currentFreq * 0.8;
    }

    function grind(currentFreq) {
        return currentFreq -= 20;
    }

    function etch(currentFreq) {
        return currentFreq -= 2;
    }

    function xRay(currentFreq) {
        return currentFreq += 1;
    }

    function transport(currentFreq) {
        console.log("Transporting and washing");
        return Math.floor(currentFreq);
    }

    let cuts = 0;
    while (desiredFreq <= currentFreq / 4) {
        currentFreq = cut(currentFreq);
        cuts++;
    }
    if(cuts !== 0){
        console.log("Cut x" + cuts);
        transport(currentFreq);
    }

    let laps = 0;
    while (desiredFreq <= currentFreq * 0.8) {
        currentFreq = lap(currentFreq);
        laps++;
    }
    if(laps !== 0){
        console.log("Lap x" + laps);
        transport(currentFreq);
    }

    let grinds = 0;
    while (desiredFreq <= currentFreq - 20) {
        currentFreq = grind(currentFreq);
        grinds++;
    }
    if(grinds !== 0){
        console.log("Grind x" + grinds);
        transport(currentFreq);
    }

    let etches = 0;
    while (desiredFreq <= currentFreq) {
        currentFreq = etch(currentFreq);
        etches++;
    }
    if(etches !== 0){
        console.log("Etch x" + etches);
        transport(currentFreq);
    }

    if(desiredFreq === currentFreq + 1){
        currentFreq = xRay(currentFreq);
        console.log("X-ray x1")
        //transport(currentFreq);
    }

    console.log(`Finished crystal ${currentFreq} microns`);
}

tuneCrystal([1375, 50000]);