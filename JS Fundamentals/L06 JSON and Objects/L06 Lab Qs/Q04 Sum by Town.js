function sumTowns(array) {
    let dict = {};
    for (let i = 0; i < array.length; i+=2){
        let town = array[i];
        let population = Number(array[i + 1]);

        if(dict[town] !== undefined){
            dict[town] += population;
        }
        else{
            dict[town] = population;
        }
    }

    console.log(JSON.stringify(dict));
}

sumTowns(["Sofia", 20, "Varna", 3, "Sofia", 5, "Varna", 4]);