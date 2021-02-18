'use strict';

function sortByAge(minAge, firstName, firstAge, secondName, secondAge) {

    let firstPerson = {
        name: firstName,
        age: firstAge
    };

    let secondPerson = {
        name: secondName,
        age: secondAge
    }

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }
    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}

sortByAge(12, 'Ivan', 15, 'Asen', 9);