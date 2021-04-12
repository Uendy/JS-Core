function calcFood(meals, commands) {
    let eaten = 0;

    for (let command of commands) {
        if(command === "End"){
            break;
        }

        if(meals.length === 0){
            break;
        }

        let commandTokens = command.split(" ").filter(x => x !=="");
        command = commandTokens[0];

        switch(command){
            case "Serve":
                let servedMeal = meals.pop();
                console.log(`${servedMeal} served!`);
                break;

            case "Add":
                let foodAdded = commandTokens[1];
                meals.unshift(foodAdded);
                break;

            case "Shift":
                let firstIndex = commandTokens[1];
                let secondIndex = commandTokens[2];

                if(firstIndex >= 0 && firstIndex < commands.length &&
                secondIndex >= 0 && secondIndex < commands.length){
                    let temporary = meals[firstIndex];
                    meals[firstIndex] = meals[secondIndex];
                    meals[secondIndex] = temporary;
                }
                break;

            case "Eat":
                let foodEaten = meals.shift();
                eaten++;
                console.log(`${foodEaten} eaten`);
                break;
            
            case "Consume":
                let startIndex = commandTokens[1];
                let endIndex = commandTokens[2];

                if(startIndex >= 0 && endIndex < meals.length){
                    let count = endIndex - startIndex + 1;
                    meals.splice(startIndex, count);
                    console.log("Burp!");
                    eaten += count;
                }
                break;
        }
    }

    if(meals.length === 0){
        console.log("The food is gone");
    }
    else{
        console.log(`Meals left: ${meals.join(", ")}`);
    }
    console.log(`Meals eaten: ${eaten}`);
}

calcFood(
['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
['Add spaghetti',
 'Shift 0 1',
 'Consume 1 4',
 'End']
);