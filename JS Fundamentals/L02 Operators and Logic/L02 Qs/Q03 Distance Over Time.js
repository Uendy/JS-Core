function findDistanceOverTime(input) {
    let firstSpeed = input[0];
    let secondSpeed = input[1];
    let timeInSec = input[2];

    let timeInKM = timeInSec / 60 / 60; // from seconds to hours

    let firstDistance = firstSpeed * timeInKM;
    let secondDistance = secondSpeed * timeInKM;

    let totalDistanceInKM = Math.abs(firstDistance - secondDistance) * 1000; // distance in meters
    console.log(totalDistanceInKM); 
}

findDistanceOverTime([0, 60, 3600]);