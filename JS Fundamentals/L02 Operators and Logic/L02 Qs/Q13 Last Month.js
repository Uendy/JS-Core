function getDayOfLastMonth(input) {
    let day = input[0];
    let month = input[1];
    let year = input[2];

    if(month < 1){
        month++;
    }

    let currentMonth = month;
    let date = new Date(day, month, year);
    while (month === currentMonth) {
        date - 1;
    }

    console.log(date.getDate);
    console.log(date.getDay);
}

getDayOfLastMonth([17, 3, 2002]);