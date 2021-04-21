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
            for (let room in doubles){
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

            for (let room in triples){
                let spaces = triples[room].freeBeds;
                if(spaces === 3){
                    hotel[room].firstGuest = firstPerson;
                    hotel[room].secondGuest = secondPerson;

                    firstAccomadated = true;
                    secondAccomadated = true;

                    triples[room].freeBeds = 1;
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

                    for (let remainingTriples in triples) {
                        // this could be an empty room so I need to check which place I put him in and not just shove him in third
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