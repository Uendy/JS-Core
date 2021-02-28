function calcTicketPrice(input) {
    let movieName = input[0];
    let date = input[1];
    let day = date.toLowerCase();

    let price = 0;

    if(movieName === "The Godfather"){
        switch (day) {
            case "Monday":
                price = 12;
                break;

            case "Tuesday":
                price = 10;
                break;

            case "Wednesday":
                price = 15;
                break

            case "Thursday":
                price = 12.50 ;
                break;
        
            case "Friday":
                price = 15;
                break

            case "Saturday":
                price = 25;
                break;

            case "Sunday":
                price = 30;
                break;

            default:
                price = -1;
                break;
        }
    }
    else if(movieName === "Schindler's List"){
        switch (day) {
            case "Monday":
                price = 8.50;
                break;

            case "Tuesday":
                price = 8.50;
                break;

            case "Wednesday":
                price = 8.50;
                break

            case "Thursday":
                price = 8.50 ;
                break;
        
            case "Friday":
                price = 8.50;
                break

            case "Saturday":
                price = 15;
                break;

            case "Sunday":
                price = 15;
                break;

            default:
                price = -1;
                break;
        }
    }
    else if(movieName === "Casablanca"){
        switch (day) {
            case "Monday":
                price = 8;
                break;

            case "Tuesday":
                price = 8;
                break;

            case "Wednesday":
                price = 8;
                break

            case "Thursday":
                price = 8;
                break;
        
            case "Friday":
                price = 8;
                break

            case "Saturday":
                price = 10;
                break;

            case "Sunday":
                price = 10;
                break;

            default:
                price = -1;
                break;
        }
    }
    else if(movieName === "The Wizard of Oz"){
        switch (day) {
            case "Monday":
                price = 10;
                break;

            case "Tuesday":
                price = 10;
                break;

            case "Wednesday":
                price = 10;
                break

            case "Thursday":
                price = 10;
                break;
        
            case "Friday":
                price = 10;
                break

            case "Saturday":
                price = 15;
                break;

            case "Sunday":
                price = 15;
                break;

            default:
                price = -1;
                break;
        }
    }
    else{
        price = -1;
    }

    if(price <= 0){
        console.log("error");
    }
    else{
        console.log(price);
    }
}

calcTicketPrice(["The Godfather", "Friday"]);