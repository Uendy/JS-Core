function replaceWithMultiplication(text) {
    let pattern = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/gm;
    text = text.replace(pattern,
         (match, firstNum, secondNumb) => Number(firstNum) * Number(secondNumb));
    console.log(text);
}

replaceWithMultiplication("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).");