function rotateArray(array) {
    let rotations = Number(array.pop()) % array.length;

    for (let rotation = 0; rotation < rotations; rotation++) {
        let temporary = array.pop();
        array.unshift(temporary);
    }

    console.log(array.join(" "));
}

rotateArray([1, 2, 3, 4, 2]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", 15]);