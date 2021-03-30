function registerHeroes(input) {
    let heroes = [];

    input.forEach(heroInfo => {
        let [name, level, itemArray] = heroInfo.split(" / ").filter(x => x !== '');
        let items = []; // this stumped me as a test wouldnt pass if items were undefined
        if(itemArray !== undefined){
            items = itemArray.split(", ");
        }
        

        let hero = {
            name: name,
            "level": Number(level),
            "items": items
        };

        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}

registerHeroes(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);