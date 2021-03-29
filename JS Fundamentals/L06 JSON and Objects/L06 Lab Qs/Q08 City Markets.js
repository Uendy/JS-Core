function getCityMarket(input) {
    let result = new Map();
    let firstSplitPattern = /\s*->\s*/gm;

    input.forEach(line => {
        let [town, product, info] = line.split(firstSplitPattern);

        let secondSplitPattern = /\s*:\s*/gm;
        let [quantity, price] = info.split(secondSplitPattern);
        let sales = quantity * price;

        if(result.has(town)){
            if(result.get(town).has(product)){
                result.get(town).set(product, result.get(town).get(product) + sales);
            }
            else{
                result.get(town).set(product, sales);
            }
        }
        else{
            let items = new Map();
            items.set(product, sales);
            result.set(town, items);
        }
    });

    for (let [town] of result) {
        console.log(`Town - ${town}`);
        for (let [product, sum] of result.get(town)) {
            console.log(`$$$${product}:${sum}`);
        }
    }
}

getCityMarket(["Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"]);