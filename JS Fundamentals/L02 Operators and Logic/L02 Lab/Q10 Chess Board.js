function drawChessBoard(size) {

    let indentation = "    ";

    console.log(`div class="chessboard">`);

    for (let row = 0; row < size; row++) {
        console.log(`${indentation}<div>`);
        for (let col = 0; col < size; col++) {

            let color = (row + col) % 2 === 0 ? "black" : "white";
            console.log(`${indentation}${indentation}<span class="${color}"></span>`);
        }
        console.log(`${indentation}</div>`);
    }

    console.log(`</div>`);
}

drawChessBoard(4);