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
        let temporary = queue.Peek();
        queue.Pop()
        queue.Push(temporary);
    }

    let stars = 2;
    let dashes = 0;
    for (let line = 0; line < lines; index++) {

    }
}