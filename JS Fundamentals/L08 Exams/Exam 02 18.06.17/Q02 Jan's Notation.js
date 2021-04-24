function calculateArrayElements(input) {

    while (input.indexOf("+", "-", "/", "*") !== -1) {
        let index = input.indexOf("+", "-", "/", "*");
        let operand = input[index];

        let numbers = new Map();
        for (let i = index; i > 0; i--){
            if(typeof input[i] === 'number'){
                numbers.set(i, input[i]);
            }

            if(numbers.keys.length === 2){
                break;
            }
        }

        if(numbers.keys.length !== 2){
            console.log("Error: too many operands!");
        }
        
        let keys = numbers.keys();
        let result = 0;
        switch (operand) {
            case "+":
                result = numbers[keys][0] + numbers[keys][1];
                break;
            case "-":
                result = numbers[keys][0] - numbers[keys][1];
                break;
            case "*":
                result = numbers[keys][0] * numbers[keys][1];
                break;
            case "/":
                result = numbers[keys][0] / numbers[keys][1];
                break;
        }

        input[index] = result;
        delete input[keys][0];
        delete input[keys][1];
    }

    if(numbers.length > 1){
        console.log("Error: not enough operands!");
    }
    else{
        console.log(number[0]);
    }
}

calculateArrayElements([31, 2, '+', 11, '/']);