function getNumbers(input) {
    let pattern = /\d+/gm;

    let text = input.join("");
    let numbers = [];

    let match = pattern.exec(text);
    while (match){
        numbers.push(match[0]);
        match = pattern.exec(text);
    }
    console.log(numbers.join(" "));
}

getNumbers(["The300",
"What is that?",
"I think it’s the 3rd movie.",
"Lets watch it at 22:45"]);