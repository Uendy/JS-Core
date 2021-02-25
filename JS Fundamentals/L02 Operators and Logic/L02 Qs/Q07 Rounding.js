function round(input) {
    
    let number = input[0];
    let precision = input[1];
    
    if(precision > 15){
        precision = 15;
    }

    let out = number.toFixed(precision).replace(/0+$/, "");
    console.log(out);
}

round([10.5, 3]);