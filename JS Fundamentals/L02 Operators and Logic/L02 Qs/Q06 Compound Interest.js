function calcInterest(input) {
    let initialValue = input[0];
    let interest = input[1] / 100;
    let incrament = input[2];
    let totalTime = input[3];

    let totalMonths = totalTime * 12;
    let totalIncraments = totalMonths / incrament;

    let actualIncraments = 12 / incrament;

    let totalValue = initialValue * Math.pow(1 + (interest / actualIncraments), totalIncraments);
    console.log(Math.round(totalValue * 100) / 100);
}

calcInterest([1500, 4.3, 3, 6]);