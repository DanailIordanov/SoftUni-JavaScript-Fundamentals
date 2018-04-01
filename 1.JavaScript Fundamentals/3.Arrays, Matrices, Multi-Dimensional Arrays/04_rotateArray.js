function rotate(input) {
    let times = input[input.length - 1];
    input.pop();
    
    for(let i = 0; i < times; i++) {
        let lastElement = input[input.length - 1];
        input.pop();
        input.unshift(lastElement);
    }

    console.log(input.join(' '));
}