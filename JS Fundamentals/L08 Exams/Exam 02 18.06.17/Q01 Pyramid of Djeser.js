function calculatePyramidMaterials(base,  incrament) {
    let steps = 1;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (let step = base; step > 0; step-=2) {
        if(step - 2 < 0){
            gold += step * step * incrament;
        }
        else{
            let innerArea = Math.pow(step - 2, 2);
            let outerPerimeter = step * step - innerArea;

            if(steps % 5 === 0){
                lapis += outerPerimeter * incrament;
            }
            else{
                marble += outerPerimeter * incrament;
            }
            
            stone += innerArea * incrament;
            
            steps++;
        }
        
    }

    // round and print:
    console.log(`Stone required: ${Math.round(stone)}`);
    console.log(`Marble required: ${Math.round(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapis)}`);
    console.log(`Gold required: ${Math.round(gold)}`);

    console.log(`Final pyramid height: ${steps * incrament}`);
}

calculatePyramidMaterials(12, 1);
calculatePyramidMaterials(11, 1);
calculatePyramidMaterials(11, 0.75);
calculatePyramidMaterials(23, 0.5);