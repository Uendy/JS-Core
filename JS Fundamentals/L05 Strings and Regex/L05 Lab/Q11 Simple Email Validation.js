function validateEmail(input) {
    let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/;
    if(input.match(pattern)){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
}

validateEmail("valid@email.bg");
validateEmail("invalid*emai1.bg");