function findDistanceOverTime(input) {
    let firstSpeed = input[0];
    let secondSpeed = input[1];
    let time = input[2];
    let timeInSeconds = time / 60 / 60; // from seconds to hours
    let firstDistance = firstSpeed * timeInSeconds;
    let secondDistance = secondSpeed * timeInSeconds;

    let totalDistance = Math.abs(firstDistance - secondDistance);
    console.log(totalDistance);
}

findDistanceOverTime([0, 60, 3600]);