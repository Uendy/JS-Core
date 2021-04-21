function assignRooms(rooms, couples) {
    let hotel = {};

    // I need something to keep the doubles and triples in the order they came
    let doubles = {};
    let triples = {};

    let doublesOrder = [];
    let triplesOrder = [];

    for (let room of rooms) {
        let number = room.number;
        let occupancy = room.type;
        if(occupancy === "double-bedded"){
            hotel[number] = {
                firstGuest: {name: "empty", age: 0},
                secondGuest: {name: "empty", age: 0}
            };

            doubles[number] = {freeBeds: 2};
            doublesOrder.push(number);
        }
        else{
            hotel[number] = {
                firstGuest: {name: "empty", age: 0},
                secondGuest: {name: "empty", age: 0},
                thirdGuest: {name: "empty", age: 0}
            };

            triples[number] = {freeBeds: 3};
            triplesOrder.push(number);
        }
    }

    let teahouse = 0;

    for (let couple of couples) {
        let firstPerson = couple.first;
        let secondPerson = couple.second;

        
        if(firstPerson.gender !== secondPerson.gender){
            let accommodated = false;
            for (let room in doublesOrder){
                let roomNumber = doublesOrder[room];
                hotel[roomNumber].firstGuest = firstPerson;
                hotel[roomNumber].secondGuest = secondPerson;
                accommodated = true;
                delete doubles[roomNumber];
                delete doublesOrder[room];
                break;
            }

            if(accommodated === false){
                teahouse += 2;
            }
        }
        else{
            let firstAccomadated = false;
            let secondAccomadated = false;

            
            for (let room in triplesOrder){
                let roomNumber = triplesOrder[room];
                let spaces = triples[roomNumber].freeBeds;
                if(spaces === 3){
                    hotel[roomNumber].firstGuest = firstPerson;
                    hotel[roomNumber].secondGuest = secondPerson;

                    firstAccomadated = true;
                    secondAccomadated = true;

                    triples[roomNumber].freeBeds = 1;
                    break;
                }
                else if(spaces === 2){
                    // need to check if they are the same gender
                    if(hotel[roomNumber].firstGuest.gender === firstGuest.gender){
                        hotel[roomNumber].secondGuest = firstPerson;
                        hotel[roomNumber].thirdGuest = secondPerson;

                        firstAccomadated = true;
                        secondAccomadated = true;

                        delete triples[roomNumber];
                        delete triplesOrder[room];
                        break;
                    }
                    else{
                        continue;
                    }
                }
                else{
                    if(hotel[roomNumber].firstGuest.gender === firstPerson.gender){
                        hotel[roomNumber].thirdGuest = firstPerson;
                        firstAccomadated = true;
                        delete triples[roomNumber];
                        delete triplesOrder[room];

                        for (let remainingTriples in triplesOrder) {
                            let remainingTriplesNumber = triplesOrder[remainingTriples];
                            // this could be an empty room so I need to check which place I put him in and not just shove him in third
                            if(hotel[remainingTriplesNumber].firstGuest.name === "empty"){
                                hotel[remainingTriplesNumber].firstGuest = secondPerson;
                                triples[remainingTriplesNumber] -= 1;
                                secondAccomadated = true;
                                break;
                            }
                            else if(hotel[remainingTriplesNumber].secondGuest.name === "empty"){
                                if(hotel[remainingTriplesNumber].firstGuest.gender === secondPerson.gender){
                                    hotel[remainingTriplesNumber].secondGuest = secondPerson;
                                    triples[remainingTriplesNumber] -= 1;
                                    secondAccomadated = true;
                                    break;
                                }
                            }
                            else if(hotel[remainingTriplesNumber].thirdGuest.name === "empty"){
                                if(hotel[remainingTriplesNumber].firstGuest.gender === secondPerson.gender){
                                    hotel[remainingTriplesNumber].thirdGuest = secondPerson;
                                    delete triples[remainingTriplesNumber];
                                    delete triplesOrder[remainingTriples];
                                    secondAccomadated = true;
                                    break;
                                }
                            }
                        }
                    }
                    else{
                        continue;
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

    // Sort rooms by ascending order:
    let sortedRooms = Object.keys(hotel).sort((a, b) => order(a,b));

    for (let room of sortedRooms) {
        console.log(`Room number: ${room}`);
        
        let currentRoom = hotel[room];
        let sortedGuests = Object.keys(currentRoom).sort((a, b) => order(hotel[room][a].name, hotel[room][b].name));

        sortedGuests.forEach(guest => {
            let currentGuest = hotel[room][guest];
            if(currentGuest.name !== "empty"){
                console.log(`--Guest Name: ${currentGuest.name}`);
                console.log(`--Guest Age: ${currentGuest.age}`);
            }
        });

        // find empty beds:
        if(room in doubles){
            console.log(`Empty beds in the room: ${doubles[room].freeBeds}`);
        }
        else if(room in triples){
            console.log(`Empty beds in the room: ${triples[room].freeBeds}`);
        }
        else{
            console.log("Empty beds in the room: 0");
        }
    }

    console.log(`Guests moved to the tea house: ${teahouse}`);

    function order(a, b) {
        return a.localeCompare(b);
    }
}

assignRooms(
[ 
    { number: '101A', type: 'double-bedded' },
    { number: '104', type: 'triple' },
    { number: '101B', type: 'double-bedded' },
    { number: '102', type: 'triple' } 
],
[ 
    { 
        first: { name: 'Sushi & Chicken', gender: 'female', age: 15 }, 
        second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } 
    },
    { 
        first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 }, 
        second: { name: 'Jeko Snejev', gender: 'male', age: 18 } 
    },
    { 
        first: { name: 'Pesho Goshov', gender: 'male', age: 20 }, 
        second: { name: 'Gosho Peshov', gender: 'male', age: 18 } 
    },    
    { 
        first: { name: 'Conor McGregor', gender: 'male', age: 29 }, 
        second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } 
    } 
]

);

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