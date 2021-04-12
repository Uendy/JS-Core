function calcFood(meals, commands) {
    let eaten = 0;

    for (let command of commands) {
        if(command === "End"){
            break;
        }

        let commandTokens = command.split(" ").filter(x => x !=="");
        command = commandTokens[0];

        //if(meals.length === 0){ // this would have been a lot cleaner, but I need to continue even with 0, just for "Add" command
        //    break;
        //}

        if(meals.length === 0 && command !== "Add"){
            continue;
        }

        switch(command){
            case "Serve":
                let servedMeal = meals.pop();
                console.log(`${servedMeal} served!`);
                break;

            case "Add":
                if(commandTokens.length === 2){
                    let foodAdded = commandTokens[1];
                    meals.unshift(foodAdded);
                }
                break;

            case "Shift":
                if(commandTokens.length === 3){
                    let firstIndex = commandTokens[1];
                    let secondIndex = commandTokens[2];

                    if(checkIndex(firstIndex, secondIndex, meals)){
                        let temporary = meals[firstIndex];
                        meals[firstIndex] = meals[secondIndex];
                        meals[secondIndex] = temporary;
                    }
                }
                break;

            case "Eat":
                let foodEaten = meals.shift();
                eaten++;
                console.log(`${foodEaten} eaten`);
                break;
            
            case "Consume":
                if(commandTokens.length === 3){
                    let startIndex = commandTokens[1];
                    let endIndex = commandTokens[2];

                    if(checkIndex(startIndex, endIndex, meals)){
                        let count = endIndex - startIndex + 1;
                        meals.splice(startIndex, count);
                        console.log("Burp!");
                        eaten += count;
                    }
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

    function checkIndex(firstIndex, secondIndex, meals){
        if(firstIndex && secondIndex && 
            firstIndex >= 0 && secondIndex >= 0 && 
            firstIndex < meals.length && secondIndex < meals.length &&
            firstIndex < secondIndex){
                return true;
            }
        return false;
    }
}

calcFood(
['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
['Add spaghetti',
 'Shift 0 1',
 'Consume 1 4',
 'End']
);