function weirdFibbonaci(count, kElems) {
    let output = [1];
    for (let i = 1; i < count; i++) {
        let currentNums = output.slice(Math.max(i - kElems, 0), i + kElems);
        let sum = currentNums.reduce((a, b) => a + b, 0);
        output.push(sum);
    }

    console.log(output.join(" "));
}

weirdFibbonaci(6, 3);
weirdFibbonaci(8, 2);