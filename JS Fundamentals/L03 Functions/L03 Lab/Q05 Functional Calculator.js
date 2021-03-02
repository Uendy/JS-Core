function calc(a, b, op) {

    let add = (a, b) => console.log(a + b);
    let subtract = (a, b) => console.log(a - b);
    let multiply = (a, b) => console.log(a * b);
    let divide = (a, b) => console.log(a / b);

    switch (op) {
        case "+": 
            add(a, b); 
            break;
        case "-": 
            subtract(a, b); 
            break;
        case "*":
            multiply(a, b); 
            break;
        case "/": 
            divide(a, b);     
            break;
    };
}

calc(2, 4, '+');
calc(18, -1, '*');