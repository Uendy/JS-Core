function createObject(input) {
    let firstProperty = input[0];
    let firstValue = input[1];

    let secondProperty = input[2];
    let secondValue = input[3];

    let thirdProperty = input[4];
    let thirdValue = input[5];

    console.log("{");
    console.log(` ${firstProperty}: '${firstValue}',`);
    console.log(` ${secondProperty}: '${secondValue}',`);
    console.log(` ${thirdProperty}: '${thirdValue}'`);
    console.log("}");

    //let object = {
    //    firstProperty:firstValue,
    //    secondProperty: secondValue,
    //    thirdProperty: thirdValue
    //};

    //console.log("{");
    //for (const kvp in object) {
    //    console.log(` ${kvp}: '${object[kvp]}'`);
    //}
    //console.log("}");
}

createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);