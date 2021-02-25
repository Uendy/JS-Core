function calcDegrees(grads) {
    grads = grads % 400;

    let degrees = grads * 0.9;

    let result = degrees % 360;
    if(result < 0)
    {
        result = 360 - Math.abs(result);
    }
    console.log(result);
}

calcDegrees(-50);