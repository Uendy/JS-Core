function aggregateElements(input) {
    
    function sum(input){
        let sum = 0;
        input.forEach(element => {
            sum += element;
        });

        return sum;
    }

    function sumInverse(input){
        let sum = 0;
        input.forEach(element => {
            let currentInverse = 1 / element;
            sum += currentInverse;
        });

        return sum;
    }

    function concat(input){
        let string = "";
        input.forEach(element => {
            string += element;
        });
        return string;
    }
    console.log(sum(input));
    console.log(sumInverse(input));
    console.log(concat(input));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);