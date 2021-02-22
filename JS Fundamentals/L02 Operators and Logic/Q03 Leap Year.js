function checkLeapYear(year) {
    let check = (year % 4 === 0 && year % 100 !== 0) 
    || year % 400 === 0;
    let result = check? "yes" : "no";
    return result;
}

console.log(checkLeapYear(1900)); 