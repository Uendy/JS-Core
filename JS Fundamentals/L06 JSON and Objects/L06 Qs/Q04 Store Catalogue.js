function alphabetizeCatalogue(input) {
    let catalogue = new Map();

    for (let line of input) {
        let [product, cost] = line.split(" : ");
        
        let firstLetter = product[0];
        if(!catalogue.has(firstLetter)){
            catalogue.set(firstLetter, []);
        }

        catalogue.get(firstLetter).push({"name": product, "price":cost});
    }

    let sortedCatalogue = [...catalogue.keys()].sort();

    for (let letter of sortedCatalogue) {
        console.log(letter);
        let products = catalogue.get(letter).sort((a, b) => a.name.localeCompare(b.name));
        products.forEach(item => {
            console.log(`  ${item.name} : ${item.price}`);
        });
    }
}

alphabetizeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);