function calculateBoxes(bottles, boxes) {
    let boxesNeeded = Math.ceil(bottles / boxes);
    return boxesNeeded; 
}

console.log(calculateBoxes(20, 7));  