function createCarCatalogue(input){
    let catalogue = new Map();

    for (let line of input) {
        let [brand, car, quantity] = line.split(/\s*\|\s*/);

        if(!catalogue.has(brand)){
            let currentCar = new Map();
            currentCar.set(car, Number(quantity));
            catalogue.set(brand, currentCar);
        }
        else{
            if(!catalogue.get(brand).has(car)){
                catalogue.get(brand).set(car, Number(quantity));
            }
            else{
                catalogue.get(brand).set(car, catalogue.get(brand).get(car) + Number(quantity));
            }
        }
    }

    for (let [brand, cars] of catalogue) {
        console.log(brand);
        for (let [car, quantity] of cars) {
            console.log(`###${car} -> ${quantity}`);
        }
    }
}

createCarCatalogue([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
  ]);