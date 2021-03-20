function checkEndOfString(string, substring) {
    if(string.endsWith(substring)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

checkEndOfString("This sentence ends with fun?", "fun?");