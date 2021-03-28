function getPopulationOfTowns(input) {
    let townsAndPopulation = new Map();

    let pattern = / <-> /gm;
    input.forEach(line => {
        let [town, population] = line.split(pattern);

        if(townsAndPopulation.has(town)){
            townsAndPopulation.set(town, townsAndPopulation.get(town) + Number(population));
        }
        else{
            townsAndPopulation.set(town, Number(population));
        }
    });

    for (let [key, value] of townsAndPopulation) {
        console.log(`${key} : ${value}`);
    }
}

getPopulationOfTowns(["Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000"]);