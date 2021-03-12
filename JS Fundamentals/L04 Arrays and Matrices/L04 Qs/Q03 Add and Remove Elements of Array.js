function manipulateArray(commands) {
    let array = [];

    function add(counter) {
        array.push(counter);
    }

    function remove() {
        if(array.length > 0){
           array.pop(); 
        }
    }

    let counter = 1;
    commands.forEach(command => {
        if(command === "add"){
            add(counter);
        }
        else{ // remove
            remove();
        }
        counter++;
    });

    if(array.length > 0){
        console.log(array.join("\n"));
    }
    else{
        console.log("Empty");
    }
}

manipulateArray(["add", "add", "add", "add"]);
manipulateArray(["remove", "remove", "remove"]);
manipulateArray(["add", "add", "remove", "add", "add"])