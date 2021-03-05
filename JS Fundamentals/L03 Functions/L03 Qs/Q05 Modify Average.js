function modifyAverage(number) {
    function getAverage(number) {
        let sum = 0;
        let numAsString = number.toString().split('');
        numAsString.forEach(num => {
            sum += parseInt(num);
        });
        let average = sum / numAsString.length;
        return average;
    }

    while (getAverage(number) <= 5) {
        number += "9";
        getAverage(number);
    }

    console.log(number);
}

modifyAverage(5835);
modifyAverage(101);