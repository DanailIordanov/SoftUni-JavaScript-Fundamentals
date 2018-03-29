function printNElement(input) {
    let step = Number(input[input.length - 1]);
    input.pop();

    if(step > input.length) {
        console.log(input[step - input.length]);
        return;
    }

    for(let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}