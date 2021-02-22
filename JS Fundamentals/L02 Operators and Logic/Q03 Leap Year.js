function checkLeapYear(year) {
    let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    let result = check? "Yes" : "No";
    return result;
}

console.log(checkLeapYear(1900)); 