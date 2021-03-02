function calc(a, b, op) {

    let add = function (a, b) { console.log(a + b)};
    let subtract = function(a, b) {console.log(a - b)};
    let multiply = function (a, b) { console.log(a * b)};
    let divide = function(a, b) {console.log(a / b)};

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