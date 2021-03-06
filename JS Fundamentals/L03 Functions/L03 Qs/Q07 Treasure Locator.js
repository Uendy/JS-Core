function locateTreasure(input) {
    let locations = [
            {
                name: "Tuvalu",
                xMin: 1,
                xMax: 3,
                yMin: 1,
                yMax: 3
            },
            {
                name: "Tonga",
                xMin: 0,
                xMax: 2,
                yMin: 6,
                yMax: 8
            },
            {
                name: "Samoa",
                xMin: 5,
                xMax: 7,
                yMin: 3,
                yMax: 6
            },
            {
                name: "Tokelau",
                xMin: 8,
                xMax: 9,
                yMin: 0,
                yMax: 1
            },
            {
                name: "Cook",
                xMin: 4,
                xMax: 9,
                yMin: 7,
                yMax: 8
            }
        ];
        
    for (let i = 0; i < input.length; i+=2) {
        let currentX = input[i];
        let currentY = input[i + 1];
        
        let coordinates = "On the bottom of the ocean";
        locations.forEach(location => {
            if(currentX >= location.xMin && currentX <= location.xMax
                && currentY >= location.yMin && currentY <= location.yMax){
                    coordinates = location.name;
            }
        });

        console.log(coordinates);
    }
}

locateTreasure([4, 2, 1.5, 6.5, 1, 3]);
locateTreasure([6, 4]);