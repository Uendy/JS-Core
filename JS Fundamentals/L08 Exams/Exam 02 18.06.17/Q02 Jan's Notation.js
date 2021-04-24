function calculateArrayElements(input) {

    for (let index = 0; index < input.length; index++) {
        let current = input[index];
        if(typeof current !== 'number'){
            let firstNum = Number.NEGATIVE_INFINITY;
            let secondNum = Number.NEGATIVE_INFINITY;
            
            // get the most recent numbers
            for (let reverse = index - 1; reverse > 0; reverse--) {
                let reverseElement = input[reverse];
                if(typeof reverseElement === 'number'){
                    if(firstNum === Number.NEGATIVE_INFINITY){
                        firstNum = reverseElement;
                    }
                    else{
                        secondNum = reverseElement;
                    }
                }
            }

            if(firstNum === Number.NEGATIVE_INFINITY || secondNum === Number.NEGATIVE_INFINITY){
                console.log("Error: too many operands");
                return;
            }

            let result = 0;
            switch (current) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result = firstNum / secondNum;
                    break;
            }

            // this wont work, because I need to find a way to add the result and remove the two numbers and operand
        }        
    }
    //let numbers = [];
    //let operators = [];
//
    //for (let index = 0; index < input.length; index++) {
    //    let current = input[index];
//
    //    if(typeof current === 'number') {
    //        numbers.push(current);
    //    }
    //    else{
    //        operators.push(current);
    //    }
    //}
//
    //// begin the additions and check if there is a number or operator error
    //if(numbers.length !== operators.length + 1){
    //    if(operators.length >= numbers.length){
    //        console.log("Error: too many operands!");
    //    }
    //    else{
    //        console.log("Error too enough opperands!");
    //    }
    //}
    //else{
    //    
    //}
}

calculateArrayElements([31, 2, '+', 11, '/']);