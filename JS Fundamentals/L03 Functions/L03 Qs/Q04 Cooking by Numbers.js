function cook(input) {
    let number = input[0];
    
    let chop = (number) => number / 2;
    let dice = (number) => Math.sqrt(number);
    let spice = (number) => number + 1;
    let bake = (number) => number * 3;
    let fillet = (number) => number * 0.80;

    for (let i = 1; i < input.length; i++){
        let command = input[i];
        switch (command) {
            case "chop":
                number = chop(number);
                break;
            case "dice":
                number = dice(number);
                break;
            case "spice":
                number = spice(number);
                break;

            case "bake":
                number = bake(number);
                break;

            case "fillet":
                number = fillet(number);
                break;
            default:
                break;
        }
        console.log(number);
    }
}

cook([9, "dice", "spice", "chop", "bake", "fillet"]);