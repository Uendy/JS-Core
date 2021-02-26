function calcDegrees(grads) {
    grads = grads % 400;

    let degrees = grads * 0.9;

    if(degrees < 0)
    {
        result = 360 + degrees;
    }
    console.log(result);
}

calcDegrees(-50);