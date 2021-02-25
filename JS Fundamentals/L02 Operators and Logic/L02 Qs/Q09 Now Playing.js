function displaySong(input){
    let song = input[0];
    let artist = input[1];
    let duration = input[2];

    //Now Playing: Nelly - Number One [4:09]
    console.log(`Now Playing: ${artist} - ${song} [${duration}]`);
}

displaySong(['Number One', 'Nelly', '4:09']);