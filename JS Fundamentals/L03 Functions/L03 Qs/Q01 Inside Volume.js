function seeIfInside(input) {
    for (let i = 0; i < input.length; i+= 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if(inVolume(x, y, z)){
            console.log("inside");
        }
        else{
            console.log("outside");
        }
    }

    function inVolume(x, y, z) {
        
        // Values given for box:
        let x1 = 10;
        let y1 = 20;
        let z1 = 15;

        let x2 = 50;
        let y2 = 80;
        let z2 = 80;

        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return true;
                }
            }
        }
        return false;
    }
}

seeIfInside([8, 20, 22]);
seeIfInside([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);