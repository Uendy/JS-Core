function getLowestPrices(input) {
    let result = {};
    
    let pattern = /\s*\|\s*/gm;
    input.forEach(input => {
        let [town, product, price] = input.split(pattern);
        
        let found = false;
        for (let city in result.keys) {
            if(currentTown[product] === undefined){
                if(currentTown[product] > price){
                    result[city][product] = price;
                }
                found = true;
                break;
            }
        }

        if(found === false){
            if(result[town] === undefined){
                result[town] = {};
            }
            if(result[town][prodcut] === undefined){
                result[town][product] = {};
            }
            result[town][product] = price;
        }
    });

    for (let town in result) {
        for (let product in result[town]) {
            console.log(`${product} -> ${result[town][product]} (${town})`);
        }
    }
}

getLowestPrices(["Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"]);