function printDNA(lines) {
    //ATCGTTAGGG
    //**AT**
    //*C--G*
    //T----T
    //*A--G*
    //**GG**
    //*A--T*
    //C----G
    //*T--T*
    //**AG**
    //*G--G*

    let queue = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    

    function rotateQueue(queue) {
        let temporary = queue[0];
        queue.shift();
        queue.push(temporary);
        queue = queue;
        return temporary;
    }

    let stars = 2;
    let dashes = 0;
    for (let line = 0; line < lines; line++) {

        let output = "*".repeat(stars) + "-".repeat(dashes) +
            rotateQueue(queue) + rotateQueue(queue) +
            "-".repeat(dashes) + "*".repeat(stars);

        console.log(output);
    }
}

printDNA(4);