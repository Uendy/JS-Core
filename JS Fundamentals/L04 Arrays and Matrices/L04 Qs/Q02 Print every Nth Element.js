function printNthElem(array) {
    let n = array.pop();
    for (let i = 0; i < array.length; i+=n) {
        console.log(array[i]);
    }
}

printNthElem([5, 20, 31, 4, 20, 2]);
printNthElem(["dsa", "asd", "test", "tset", 2, ]);