function sortRooms(rooms, guests) {
    
    // make the dataType:
    //key = rooms(number), value = array holding the guests as objects
    let hotel = new Map();

    // get the rooms into the hotel 
    for (let room of rooms) {
        let currentRoomNumber = room.number;
        let currentRoomSpread = room.type;

        if(currentRoomSpread === "double-bedded"){
            hotel.set(currentRoomNumber, [2]);
        }
        else{
            hotel.set(currentRoomNumber, [3]);
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

    }
    

    // sort 
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