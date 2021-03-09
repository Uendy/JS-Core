function orderSignedArray(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        let currentElem = array[i];
        if( currentElem < 0){
            output.unshift(currentElem);
        }
        else{
            output.push(currentElem);
        }
    }

    output.forEach(element => {
        console.log(element);
    });
}

orderSignedArray([7, -2, 8, 9]);
orderSignedArray([3, -2, 0, -1]);