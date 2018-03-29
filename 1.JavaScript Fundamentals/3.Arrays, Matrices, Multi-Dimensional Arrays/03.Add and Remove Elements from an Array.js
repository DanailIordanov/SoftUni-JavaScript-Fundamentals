function addOrRemoveElements(input) {
    let array = [];
    let numberToAdd = 1;

    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'add') {
            array.push(numberToAdd);
        } else {
            array.pop();
        }

        numberToAdd++;
    }

    if (array.length > 0) {
        for (let number of array) {
            console.log(number);
        }

    } else {
        console.log('Empty');
    }
}