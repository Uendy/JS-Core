function checkSpeed(input) {
    let speed = input[0];
    let location = input[1];

    let speedAndLocation = 
    {   
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let currentLimit = speedAndLocation[location];
    
    if(speed > currentLimit){
        let speedOverLimit = speed - currentLimit;
        if(speedOverLimit <= 20){
            console.log("speeding");
        }
        else if(speedOverLimit <= 40){
            console.log("excessive speeding");
        }
        else{
            console.log("reckless driving");
        }
    }
}

checkSpeed([40, "city"]);
checkSpeed([21, "residential"]);
checkSpeed([120, "interstate"]);
checkSpeed([200, "motorway"]);