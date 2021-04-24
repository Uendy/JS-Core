function calculateArrayElements(input) {
    let operands = ["+", "-", "*", "/"];

    while (getNextOperand(operands, input) !== Number.MAX_SAFE_INTEGER) {
        let index = getNextOperand(operands, input);
        let operand = input[index];

        let numbers = new Map();
        for (let i = index - 1; i >= 0; i--){
            if(typeof input[i] === 'number'){
                numbers.set(i, input[i]);
            }

            if(numbers.keys.length === 2){
                break;
            }
        }

        if([...numbers.keys()].length !== 2){
            console.log("Error: too many operands!");
        }
        
        let keys = numbers.keys();
        let firstNum = numbers.get(keys.next().value);
        let secondNum = numbers.get(keys.next().value);
        let result = 0;
        switch (operand) {
            case "+":
                result = secondNum + firstNum;
                break;
            case "-":
                result = secondNum - firstNum;
                break;
            case "*":
                result = secondNum * firstNum;
                break;
            case "/":
                result = secondNum / firstNum;
                break;
        }

        
        input[index] = result;
        keys = numbers.keys();
        let firstIndex = keys.next().value;
        let secondIndex = keys.next().value;
        delete input[firstIndex];
        delete input[secondIndex];
        
        // probably need to just re-make input, so that it is re-sized properly
        let temporaryArray = [];
        input.forEach(element => {
            temporaryArray.push(element);
        });

        input = temporaryArray;
    }

    if(input.length > 1){
        console.log("Error: not enough operands!");
    }
    else{
        console.log(input[0]);
    }

    function getNextOperand(operands, input) {
        let lowestIndex = Number.MAX_SAFE_INTEGER;

        operands.forEach(op => {
            let currentIndex = input.indexOf(op);
            if(currentIndex !== -1 && currentIndex < lowestIndex) {
                lowestIndex = currentIndex;
            }
        });

        return lowestIndex;
    }
}

calculateArrayElements([31, 2, '+', 11, '/']);