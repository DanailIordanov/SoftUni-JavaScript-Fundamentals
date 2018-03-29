function printArray(input) {
    let delimiter = input[input.length - 1];
    input.pop();
    let result = input[0];
    for(let i = 1; i < input.length; i++){
        result += delimiter + input[i];
    }

    console.log(result);
}