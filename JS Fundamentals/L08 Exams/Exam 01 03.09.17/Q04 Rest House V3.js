function assignRooms(rooms, couples) {
    let hotel = {};

    let doubles = {};
    let triples = {};

    for (let room of rooms) {
        let number = room.number;
        let occupancy = room.type;
        if(occupancy === "double-bedded"){
            hotel[number] = {
                firstGuest: {name: "empty", age: 0},
                secondGuest: {name: "empty", age: 0}
            };

            doubles[number] = {freeBeds: 2};
        }
        else{
            hotel[number] = {
                firstGuest: {name: "empty", age: 0},
                secondGuest: {name: "empty", age: 0},
                thirdGuest: {name: "empty", age: 0}
            };

            triples[number] = {freeBeds: 3};
        }
    }

    let teahouse = 0;

    for (let couple of couples) {
        let firstPerson = couple.first;
        let secondPerson = couple.second;

        
        if(firstPerson.gender !== secondPerson.gender){
            let accommodated = false;
            for (let room of doubles.keys()){
                hotel[room].firstGuest = firstPerson;
                hotel[room].secondGuest = secondPerson;
                accommodated = true;
                delete doubles[room];
                break;
            }

            if(accommodated === false){
                teahouse += 2;
            }
        }
        else{
            let firstAccomadated = false;
            let secondAccomadated = false;

            for (let room of triples){
                let spaces = room.freeBeds;
                if(spaces === 3){
                    hotel[room].firstGuest = firstPerson;
                    hotel[room].secondGuest = secondPerson;

                    firstAccomadated = true;
                    secondAccomadated = true;

                    triples[room] = 1;
                    break;
                }
                else if(spaces === 2){
                    hotel[room].secondGuest = firstPerson;
                    hotel[room].thirdGuest = secondPerson;

                    firstAccomadated = true;
                    secondAccomadated = true;

                    delete triples[room];
                    break;
                }
                else{
                    hotel[room].thirdGuest = firstPerson;
                    firstAccomadated = true;
                    delete triples[room];

                    for (let remainingTriples of triples) {
                        hotel[remainingTriples].thirdGuest = secondPerson;
                        delete triples[remainingTriples];
                        secondAccomadated = true;
                        break;
                    }
                }
            }

            if(!firstAccomadated && !secondAccomadated){
                teahouse += 2;
            }
            else if(!secondAccomadated){
                teahouse += 1;
            }
        }
    }
}

assignRooms(
    [
        { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' } 
    ],
    [ 
        {
            first: { name: 'Tanya Popova', gender: 'female', age: 24 }, 
            second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } 
        },
        {
            first: { name: 'Katerina Stefanova', gender: 'female', age: 23 }, 
            second: { name: 'Angel Nachev', gender: 'male', age: 22 } 
        },
        { 
            first: { name: 'Tatyana Germanova', gender: 'female', age: 23 }, 
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 } 
        } 
    ]
);