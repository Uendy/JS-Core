function getDayOfLastMonth(input) {
    let day = input[0];
    let month = input[1];
    let year = input[2];

    // in case they give us january
    if(month < 1){
        month++;
    }

    let date = new Date(year, month - 1, 0);
    let dayCount = date.getDate();
    console.log(dayCount);
}

getDayOfLastMonth([17, 3, 2002]);