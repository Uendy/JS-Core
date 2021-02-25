function findCircleArea(radius) {
    let area = Math.PI * radius * radius;

    console.log(area);

    let areaRounded = Math.round(area * 100) / 100;
    return areaRounded;
}

console.log(findCircleArea(5));