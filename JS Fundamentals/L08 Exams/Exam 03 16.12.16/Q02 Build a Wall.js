function buildWall(wall) {
    let days = [];

    wall.forEach(segment => {
        let height = Number(segment);
        let day = 0;
        for (let size = height; size < 30; size++) {
            if(days[day] !== undefined){
               days[day] += 195; 
            }
            else{
                days[day] = 195;
            }
            
            day++;            
        }
    });

    // print the days and the their cubic yards
    console.log(days.join(', '));

    let totalCubicYards = days.reduce((accumulator, totalCubicYards) => accumulator + totalCubicYards);
    let pesos = totalCubicYards * 1900;
    console.log(`${pesos} pesos`);
}

buildWall(["21", "25", "28"]);
buildWall(["17", "22", "17", "19", "17"]);