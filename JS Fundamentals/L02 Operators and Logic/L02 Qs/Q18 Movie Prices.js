function calcTicketPrice(input) {
    let movie = input[0];
    let movieName = movie.toLowerCase();

    let date = input[1];
    let day = date.toLowerCase();

    let price = 0;

    if(movieName === "the godfather"){
        switch (day) {
            case "monday":
                price = 12;
                break;

            case "tuesday":
                price = 10;
                break;

            case "wednesday":
                price = 15;
                break

            case "thursday":
                price = 12.50 ;
                break;
        
            case "friday":
                price = 15;
                break

            case "saturday":
                price = 25;
                break;

            case "sunday":
                price = 30;
                break;

            default:
                price = -1;
                break;
        }
    }
    else if(movieName === "schindler's list"){
        switch (day) {
            case "monday":
                price = 8.50;
                break;

            case "tuesday":
                price = 8.50;
                break;

            case "wednesday":
                price = 8.50;
                break

            case "thursday":
                price = 8.50 ;
                break;
        
            case "friday":
                price = 8.50;
                break

            case "saturday":
                price = 15;
                break;

            case "sunday":
                price = 15;
                break;

            default:
                price = -1;
                break;
        }
    }
    else if(movieName === "casablanca"){
        switch (day) {
            case "monday":
                price = 8;
                break;

            case "tuesday":
                price = 8;
                break;

            case "wednesday":
                price = 8;
                break

            case "thursday":
                price = 8;
                break;
        
            case "friday":
                price = 8;
                break

            case "saturday":
                price = 10;
                break;

            case "sunday":
                price = 10;
                break;

            default:
                price = -1;
                break;
        }
    }
    else if(movieName === "the wizard of oz"){
        switch (day) {
            case "monday":
                price = 10;
                break;

            case "tuesday":
                price = 10;
                break;

            case "wednesday":
                price = 10;
                break

            case "thursday":
                price = 10;
                break;
        
            case "friday":
                price = 10;
                break

            case "saturday":
                price = 15;
                break;

            case "sunday":
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