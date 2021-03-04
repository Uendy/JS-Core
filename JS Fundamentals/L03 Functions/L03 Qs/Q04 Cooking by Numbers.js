function cook(input) {
    let number = input[0];
    
    function chop(number) { 
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice (number){
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number * 0.80;
    }

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