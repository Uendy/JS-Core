function convertBinaryToDecimal(binary) {
    
    let length = binary.length;

    let decimal = 0;
    for (let index = 0; index < length; index++) {

        let currentChar = binary[index];

        let isTrue = currentChar === "1";
        if(isTrue){
            let number = length - index - 1;
            decimal += Math.pow(2, number);
        }
    }

    console.log(decimal);
}

convertBinaryToDecimal("00001001");