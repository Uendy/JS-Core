function calcBottles(input) {
    let juices = {};
    let bottles = {};

    input.forEach(line => {
        let [fruit, quantity] = line.split(" => ");

        if(juices[fruit] === undefined){
            juices[fruit] = Number(quantity);
        }
        else{
            juices[fruit] += Number(quantity);

        }

        while(juices[fruit] >= 1000){
            if(bottles[fruit] === undefined){
                bottles[fruit] = 0;
            }

            juices[fruit] -= 1000;
            bottles[fruit]++;
        }
    });

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

calcBottles([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
  ]);