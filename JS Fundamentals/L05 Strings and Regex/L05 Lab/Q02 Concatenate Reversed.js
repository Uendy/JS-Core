function reverseAndConcatStrings(input) {
    let outPut = [];
    input.forEach(element => {
        let reversed = element.split("").reverse().join("");
        outPut.push(reversed);
    });

    console.log(outPut.reverse().join(""));
}

reverseAndConcatStrings(['I', 'am', 'student']);