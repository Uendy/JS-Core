function determineOddOrEven(number) {
    let evenCheck = number % 2 === 0;
    if(evenCheck){
        return "even";
    }
    else
    {
        if(number !== Math.round(number)){ 
            return "invalid";
        }
        return "odd";
    }
}

console.log(determineOddOrEven(7));
console.log(determineOddOrEven(8));
console.log(determineOddOrEven(7.5));