function checkPalindrome(string) {
    let reversed = string.split('')
        .reverse()
        .join("");

    if(string === reversed){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

checkPalindrome("haha");
checkPalindrome("racecar");