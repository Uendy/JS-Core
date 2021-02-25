function fruitOrVegetable(food) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    let isFruit = fruits.includes(food);
    let isVegetable = vegetables.includes(food);

    if(isFruit){
        return "fruit";
    }
    else if(isVegetable){
        return "vegetable";
    }
    else{
        return "unknown";
    }
}

console.log(fruitOrVegetable("apple"));
console.log(fruitOrVegetable("pepper"));
console.log(fruitOrVegetable("water"));