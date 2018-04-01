function modifyNumber(input) {
    let number = Number(input[0]);

    for(let i = 1; i < input.length; i++){
        number = performOperation(input[i], number);
        console.log(number);

    }

    function performOperation(operation, number) {
        switch(operation) {
            case 'chop': return number / 2;
            case 'dice': return Math.sqrt(number);
            case 'spice': return ++number;
            case 'bake': return number *= 3;
            case 'fillet': return number *= 0.8;
        }
    }
}