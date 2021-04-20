function sortRooms(rooms, guests) {
    let hotel = {};

    for (let room of rooms) {
        let number = room.number;
        let occupancy = room.type;
        if(occupancy === "double-bedded"){
            hotel[number] = {
                firstGuest: {name: "empty", age: 0},
                secondGuest: {name: "empty", age: 0}
            };
        }
        else{
            hotel[number] = {
                firstGuest: {name: "empty", age: 0},
                secondGuest: {name: "empty", age: 0},
                thirdGuest: {name: "empty", age: 0}
            };
        }
    }

    let teahouse = 0;

    for (let couple of guests) {
        let firstPerson = couple.first;
        let secondPerson = couple.second;

        if(firstPerson.gender !== secondPerson.gender){
            let doubles = Object.keys(hotel).filter(x => Object.keys(hotel[x]).length === 2);
            for (let double of doubles) {
                if(hotel[double].firstGuest.name === "empty"){
                    hotel[double].firstGuest = firstPerson;
                    //hotel[double].firstGuest.name = firstPerson.name;
                    //hotel[double].firstGuest.age = firstPerson.age;

                    hotel[double].secondGuest = secondPerson;
                    //hotel[double].secondGuest.name = secondPerson.name;
                    //hotel[double].secondGuest.age = secondPerson.age;
                    break;
                }
                // nothing is said about a two different sex couples if there are no free doubles
            }
        }
        else{
            // different genders:
            let triples = Object.keys(hotel).filter(x => Object.keys(hotel[x].length === 3));
            for (let triple of triples) {
                let anyEmpty = hotel[triple].some(x => x.name === "empty");
                if(anyEmpty !== 0){
                    let firstEmpty = hotel[triple].firstGuest.name === "empty";
                    let secondEmpty = hotel[triple].secondGuest.name === "empty";
                    let thirdEmpty = hotel[triple].thirdGuest.name === "empty";
                    
                    if(firstEmpty === true){
                        hotel[triple].firstGuest = firstPerson;
                        hotel[triple].secondGuest = secondPerson;
                        break;
                    }
                    else if(secondEmpty === true){
                        hotel[triple].secondGuest = firstPerson;
                        hotel[triple].thirdGuest = secondPerson;
                        break;
                    }
                    else{
                        hotel[triple].thirdGuest = firstPerson;
                        
                        // find a room for the 2nd person


                    }

                }
                else{
                    teahouse += 2;
                }
            }
        }
    }
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