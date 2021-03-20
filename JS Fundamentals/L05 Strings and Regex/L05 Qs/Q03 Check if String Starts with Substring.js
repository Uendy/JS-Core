function checkStartOfString(string, substring) {
    if(string.startsWith(substring)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

checkStartOfString("How have you been?", "how");