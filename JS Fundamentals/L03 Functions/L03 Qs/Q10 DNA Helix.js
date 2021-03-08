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

    function changeStars(stars, counter) {
        switch (counter) {
            case 0: return 2;
            case 1: return 1;
            case 2: return 0;
            case 3: return 1;
            case 4: return 2;
        }
    }

    function changeDashes(dashes, counter) {
        switch (counter) {
            case 0: return 0;
            case 1: return 2;
            case 2: return 4;
            case 3: return 2;
            case 4: return 0;
        }
    }

    let stars = 2;
    let dashes = 0;
    let counter = 0;

    for (let line = 0; line < lines; line++) {

        let output = "*".repeat(stars) +
            rotateQueue(queue) +
            "-".repeat(dashes) + 
            rotateQueue(queue) +
            "*".repeat(stars);

        console.log(output);

        counter++;
        if(counter === 4){
            counter = 0;
        }
        stars = changeStars(stars, counter);
        dashes = changeDashes(dashes, counter);
    }
}

printDNA(4);
printDNA(10);