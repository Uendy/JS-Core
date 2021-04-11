function calcFood(meals, commands) {
    let eaten = 0;

    for (let command of commands) {
        if(command === "End"){
            break;
        }

        // split command and check
        // switch case and execute
    }

    console.log(`Meals left: ${meals.joing(", ")}`);
    console.log(`Meals eaten: ${eaten}`);
}

calcFood(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
['Add spaghetti',
 'Shift 0 1',
 'Consume 1 4',
 'End']
);