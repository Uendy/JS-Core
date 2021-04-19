function sortRooms(rooms, guests) {
    
    // make the dataType:
    //key = rooms(number), value = array holding the guests as objects
    let hotel = new Map();

    // get the rooms into the hotel 
    for (let room of rooms) {
        let currentRoomNumber = room.number;
        let currentRoomSpread = room.type;

        if(currentRoomSpread === "double-bedded"){
            hotel.set(currentRoomNumber, [0, 1]);
        }
        else{
            hotel.set(currentRoomNumber, [0, 1, 2]);
        }
    }

    let teaHouse = 0;

    // go through the couples and put the guests in their places
    for (let couple of guests) {
        let firstPerson = couple.first;
        let firstPersonName = firstPerson.name;
        let firstPersonGender = firstPerson.gender;
        let firstPersonAge = firstPerson.age;

        let secondPerson = couple.second;
        let secondPersonName = secondPerson.name;
        let secondPersonGender = secondPerson.gender;
        let secondPersonAge = secondPerson.age;
        
        // Find the best room for them:
        //•	If the couple is a male and a female, they must be accommodated in the first free double room;
        //•	If the couple is of two people of the same gender, they should be accommodated in a triple room;
        //•	If there is free space in a triple room, it must be filled by a guest or guests of the same gender as the one already staying in the room;
        
        if(firstPersonGender !== secondPersonGender){
            // check for free double rooms:
            for (let [number, occupancy] of hotel) {
                if(occupancy.length === 2){
                    if(occupancy[0] === 0){
                        occupancy[0] = firstPerson;
                        occupancy[1] = secondPerson;
                        continue;
                    }
                }
            }
        }
        else{ // same gender
            // try and find a free triple:
            for (let [number, occupancy] of hotel){
                if(occupancy.length === 3){
                    if(occupancy[0] === 0){
                        occupancy[0] = firstPerson;
                        occupancy[1] = secondPerson;
                        continue;
                    }
                }
            }
            // TO DO! : need to also place them in a free triple if any
            // split them and find a triple with a free space and same gender
            // find another triple with free space and same gender for the other
            let firstPersonRoomFound = false;
            let secondPersonRoomFound = false;

            for (let [number, occupancy] of hotel) {
                if(occupancy.length === 3){
                    if(occupancy[2] === 0){
                        if(occupancy[0].gender === firstPerson.gender){
                            if(firstPersonRoomFound !== true){
                                occupancy[2] = firstPerson;
                                firstPersonRoomFound = true;
                            }
                            else if (secondPersonRoomFound !== true){
                                occupancy[2] = secondPerson;
                                secondPersonRoomFound = true;
                            }
                            
                            if(firstPersonRoomFound && secondPersonRoomFound){
                                continue;
                            }
                        }
                    }
                }
            }

            // if no free house for one or both -> teahouse
            if(firstPersonRoomFound === false){
                teahouse++;
            }
            if(secondPersonRoomFound === false){
                teahouse++;
            }
            
        }
    }
    // sort 
    let sortedRooms = hotel.keys.sort;//((a.name, b.name) => localeCompare(a, b));
    sortedRooms.forEach(room => {
        //let currentRoom = hotel.get(room);
        console.log(`Room number: ${room.number}`);

        // sort guests by name (alphabetical)
        for (let [key, guests] of room) {
            // redo this and search for every guest if they are 0, 1, 2 and print if you have empty beds
            if(guests === [0, 1]){
                console.log(`Empty beds in the room: 2`);
                continue;
            }

            if(guests === [0, 1, 2]){
                console.log(`Empty beds in the room: 3`);
                continue;
            }

            guests.forEach(guest => {
                console.log(`Guest name: ${guest.name}`);
                console.log(`Guest age: ${guest.age}`);
            });

            if(guests.length === 3 && guest){

            }
        }

        console.log(`Guests moved to the tea house: ${teahouse}`);
    });
}

sortRooms(
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