function extractSequence(input) {
    let currentBiggestNum = input[0];
    let index = 1;

    while (true) {
        if (input[index] === undefined) {
            break;
        }

        if (input[index] >= currentBiggestNum) {
            currentBiggestNum = input[index];
        } else {
            input.splice(index, 1);
            index--;
        }

        index++;
    }

    for (let item of input) {
        console.log(item);
    }
}