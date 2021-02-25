function convertToImperial(centimeters) {
    let feet = Math.floor(centimeters / 12);
    let inches = centimeters % 12;

    console.log(`${feet}'-${inches}"`);
}

convertToImperial(36);