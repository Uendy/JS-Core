function calculateArrayElements(input) {

    while (input.indexOf("+", "-", "/", "*") !== -1) {
        let index = input.indexOf("+", "-", "/", "*");
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
                result = firstNum + secondNum;
                break;
            case "-":
                result = firstNum - secondNum;
                break;
            case "*":
                result = firstNum * secondNum;
                break;
            case "/":
                result = firstNum / second;
                break;
        }

        // probably need to just re-make input, so that it is re-sized properly
        input[index] = result;
        keys = numbers.keys();
        let firstIndex = keys.next().value;
        let secondIndex = keys.next().value;
        delete input[firstIndex];
        delete input[secondIndex];
    }

    if(input.length > 1){
        console.log("Error: not enough operands!");
    }
    else{
        console.log(number[0]);
    }
}

calculateArrayElements([31, 2, '+', 11, '/']);